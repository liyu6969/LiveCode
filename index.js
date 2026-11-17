/**
 * Host half: publish this bundle's settings to the browser page.
 *
 * The panel is a browser surface, so the Host half owns the Config schema and
 * embeds the validated values as a page global the client half reads once at
 * module load. Schemastery is resolved from the running dsh installation: this
 * bundle is linked from the workspace, so it has no node_modules of its own and
 * must borrow the one the host process already loaded.
 */
import { createRequire } from 'node:module'
import path from 'node:path'

/** Defaults shared by the schema, the injected settings and the client fallback. */
const DEFAULT_SCENE_HEIGHT = 168

/**
 * Load the host's own Schemastery, wherever this installation keeps it.
 * @returns the module namespace, or undefined when no candidate resolves.
 */
function loadSchemastery() {
  const candidates = []
  if (process.env.DSH_INSTALL_DIR) candidates.push(path.join(process.env.DSH_INSTALL_DIR, 'package.json'))
  if (process.resourcesPath) candidates.push(path.join(process.resourcesPath, 'app.asar/dsh/node_modules/@deepseek-ai/dsh/package.json'))
  candidates.push(path.join(path.dirname(process.execPath), '..', 'Resources', 'app.asar', 'dsh', 'node_modules', '@deepseek-ai', 'dsh', 'package.json'))
  for (const base of candidates) {
    try {
      const loaded = createRequire(base)('@deepseek-ai/schemastery')
      const z = loaded.default ?? loaded
      if (typeof z?.object === 'function') return z
    } catch {
      // Try the next location; a missing schema only costs validation.
    }
  }
  return undefined
}

const z = loadSchemastery()

/** Settings a profile can override in its `cordis.patch.yml` or on the Plugins page. */
export const Config = z === undefined ? undefined : z.object({
  scene: z.boolean().default(true).description('在面板底部显示打字的角色场景'),
  sceneHeight: z.natural().min(120).max(280).default(DEFAULT_SCENE_HEIGHT).description('场景高度（像素）'),
  character: z.union([z.const('maid'), z.const('mint')]).default('maid')
    .description('显示的人物：maid = 大肥鱼（深海女仆），mint = 小绿（薄荷双马尾）'),
  drink: z.union([z.const('coffee'), z.const('tea')]).default('coffee')
    .description('休息时喝的饮品：coffee = 咖啡，tea = 茶'),
})

/**
 * Embed the validated settings in every browser page.
 * @param ctx - Host context serving browser pages.
 * @param config - Settings adopted when the page loads.
 */
export function apply(ctx, config) {
  const raw = config === undefined || config === null ? {} : config
  const settings = {
    scene: raw.scene !== false,
    sceneHeight: Math.min(280, Math.max(120, Number(raw.sceneHeight) || DEFAULT_SCENE_HEIGHT)),
    character: raw.character === 'mint' ? 'mint' : 'maid',
    drink: raw.drink === 'tea' ? 'tea' : 'coffee',
  }
  ctx.on('webserver/index-inject', table => {
    table.push({ kind: 'global', name: '__DSH_CODE_LIVE_CONFIG__', value: settings })
  })
}
