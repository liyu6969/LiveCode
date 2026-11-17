window.__ModuleLoader__.load({
  id: '@local/dsh-code-live',
  factory(require) {
    const React = require('react')
    const h = React.createElement
    const { useEffect, useMemo, useRef, useState } = React

    /** This package's identity: the tab type id and the body's cell key. */
    const TAB_ID = '@local/dsh-code-live'
    /** The tab kind `openTab` names. */
    const TAB_KIND = 'code-live'
    /** This package's copy namespace. */
    const NS = 'dshCodeLive'

    const SCENE = {
      html: "<div class=\"scene\" id=\"dcl-scene\"><svg viewBox=\"0 0 1000 640\" role=\"img\" aria-label=\"一位薄荷色双马尾的二次元少女背对观众，坐在电脑前敲代码\">\n<defs>\n<linearGradient id=\"room\" x2=\"0\" y2=\"1\"><stop stop-color=\"#202d49\"/><stop offset=\"1\" stop-color=\"#35415a\"/></linearGradient>\n<linearGradient id=\"hair\" x2=\"1\" y2=\".7\"><stop stop-color=\"#d0f7e5\"/><stop offset=\".45\" stop-color=\"#91cfc8\"/><stop offset=\"1\" stop-color=\"#528e9f\"/></linearGradient>\n<linearGradient id=\"coat\" x2=\"1\" y2=\"1\"><stop stop-color=\"#a7adc9\"/><stop offset=\"1\" stop-color=\"#68728e\"/></linearGradient>\n<linearGradient id=\"desk\" x2=\"0\" y2=\"1\"><stop stop-color=\"#b18d94\"/><stop offset=\"1\" stop-color=\"#6f596d\"/></linearGradient>\n<radialGradient id=\"light\"><stop stop-color=\"#85eacf\" stop-opacity=\".3\"/><stop offset=\"1\" stop-color=\"#85eacf\" stop-opacity=\"0\"/></radialGradient>\n<pattern id=\"keys\" width=\"16\" height=\"13\" patternUnits=\"userSpaceOnUse\"><rect x=\"1\" y=\"1\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#a6b3c9\"/><path d=\"M3 3h5\" stroke=\"#d9e9ea\" stroke-width=\"1\"/></pattern>\n<clipPath id=\"screen\"><rect x=\"326\" y=\"187\" width=\"348\" height=\"191\" rx=\"4\"/></clipPath>\n<linearGradient id=\"skin\" x1=\"0\" y1=\"0\" x2=\".4\" y2=\"1\"><stop stop-color=\"#ffe3ce\"/><stop offset=\".55\" stop-color=\"#edbbb3\"/><stop offset=\"1\" stop-color=\"#be8292\"/></linearGradient>\n<linearGradient id=\"fabric\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\".7\"><stop stop-color=\"#b4b9d6\"/><stop offset=\".35\" stop-color=\"#929dbd\"/><stop offset=\".7\" stop-color=\"#6e7a9b\"/><stop offset=\"1\" stop-color=\"#4b5879\"/></linearGradient>\n<linearGradient id=\"hair-depth\" x2=\"1\" y2=\".2\"><stop stop-color=\"#3e7184\"/><stop offset=\".25\" stop-color=\"#83c5c1\"/><stop offset=\".52\" stop-color=\"#c5f1da\"/><stop offset=\".72\" stop-color=\"#8accc7\"/><stop offset=\"1\" stop-color=\"#39667f\"/></linearGradient>\n<linearGradient id=\"metal\" x2=\"1\" y2=\"1\"><stop stop-color=\"#f5c3d5\"/><stop offset=\".5\" stop-color=\"#bb89ae\"/><stop offset=\"1\" stop-color=\"#645476\"/></linearGradient>\n<linearGradient id=\"blue-hair\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\".5\"><stop stop-color=\"#232b54\"/><stop offset=\".28\" stop-color=\"#425988\"/><stop offset=\".52\" stop-color=\"#506d9c\"/><stop offset=\".78\" stop-color=\"#344777\"/><stop offset=\"1\" stop-color=\"#222843\"/></linearGradient><linearGradient id=\"lace\" x2=\".7\" y2=\"1\"><stop stop-color=\"#fffaf4\"/><stop offset=\".5\" stop-color=\"#e1dfed\"/><stop offset=\"1\" stop-color=\"#a4abc5\"/></linearGradient>\n</defs>\n\n<ellipse class=\"screen-glow\" cx=\"500\" cy=\"350\" rx=\"340\" ry=\"260\" fill=\"url(#light)\"/>\n<g transform=\"translate(0 48)\">\n<!-- 桌面 -->\n<path d=\"M145 402h710l95 116H50z\" fill=\"url(#desk)\" stroke=\"#403a51\" stroke-width=\"3\"/><path d=\"M50 518h900v19H50z\" fill=\"#59495f\"/><path d=\"M95 537h24v103H95zm786 0h24v103h-24z\" fill=\"#3c354b\"/>\n<!-- 显示器 -->\n<path d=\"M483 368h34v49h-34z\" fill=\"#222b40\"/><path d=\"M445 420l21-13h68l22 13z\" fill=\"#202a3d\"/>\n<rect x=\"313\" y=\"173\" width=\"374\" height=\"219\" rx=\"10\" fill=\"#161e30\" stroke=\"#65748e\" stroke-width=\"3\"/>\n<rect x=\"326\" y=\"187\" width=\"348\" height=\"191\" rx=\"4\" fill=\"#172b39\"/>\n<g clip-path=\"url(#screen)\"><rect x=\"326\" y=\"187\" width=\"348\" height=\"20\" fill=\"#253c4c\"/><circle cx=\"338\" cy=\"197\" r=\"3\" fill=\"#f6a7b9\"/><circle cx=\"348\" cy=\"197\" r=\"3\" fill=\"#ead39c\"/><circle cx=\"358\" cy=\"197\" r=\"3\" fill=\"#9ce9cf\"/><text x=\"378\" y=\"200\" fill=\"#9db6c9\" font-family=\"monospace\" font-size=\"8\">midnight.tsx</text><g id=\"dcl-code\" font-family=\"monospace\" font-size=\"9\"></g></g>\n<circle cx=\"500\" cy=\"385\" r=\"2\" fill=\"#9ce9cf\"/>\n<!-- 桌上的物品 -->\n<ellipse id=\"dcl-cup-shadow\" cx=\"683\" cy=\"455\" rx=\"32\" ry=\"10\" fill=\"#65516b\"/>\n<g transform=\"rotate(-9 236 457)\"><rect x=\"195\" y=\"426\" width=\"80\" height=\"62\" rx=\"3\" fill=\"#d4b4c2\"/><path d=\"M206 441h51m-51 10h38m-38 10h45\" stroke=\"#9c819b\" stroke-width=\"2\"/></g>\n<g class=\"keyboard animated\"><path d=\"M369 426h262l18 57H351z\" fill=\"#424c67\" stroke=\"#c4c3d2\" stroke-width=\"2\"/><path d=\"M375 432h250l12 43H363z\" fill=\"url(#keys)\"/><path d=\"M452 466h96v7h-96z\" fill=\"#e3c2ce\"/></g>\n<!-- 接触阴影与耳机线 -->\n<ellipse cx=\"500\" cy=\"488\" rx=\"119\" ry=\"17\" fill=\"#272a42\" opacity=\".25\"/>\n<path d=\"M566 388C603 419 575 459 603 494S618 523 607 527\" fill=\"none\" stroke=\"#252d43\" stroke-width=\"3\"/>\n<g class=\"maid-only\"><path d=\"M560 580C626 583 661 551 651 507Q627 506 617 480q28 2 40 19 7-26 30-41-1 42-28 51 20 63-58 102\" fill=\"#30395e\" stroke=\"#1e2743\" stroke-width=\"2\"/><path d=\"M651 509q11 51-50 85\" fill=\"none\" stroke=\"#53648d\" stroke-width=\"2\"/></g>\n<!-- 咖啡杯：组原点就是杯柄上的握持点，手由杯子的变换反推，二者不会错位 -->\n<g id=\"dcl-coffee-cup\" transform=\"translate(642 425)\"><g transform=\"translate(8 1)\">\n<g class=\"coffee-only\"><path d=\"M10-11q-25-4-16 19 5 8 18 5\" fill=\"none\" stroke=\"#e8c4bb\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<path d=\"M55-19H10l5 44q17 13 35 0z\" fill=\"#e8c4bb\"/><path d=\"M42-6l-9 15-9-15\" fill=\"none\" stroke=\"#ac738b\" stroke-width=\"2\"/>\n<ellipse cx=\"33\" cy=\"-17\" rx=\"20\" ry=\"4\" fill=\"#7b514e\"/><path d=\"M49-12l-4 29\" stroke=\"#fff0de\" stroke-width=\"2\" opacity=\".6\"/></g>\n<!-- 茶杯：青瓷釉色、茶汤与挂在杯沿外的茶包标签 -->\n<g class=\"tea-only\"><path d=\"M10-11q-25-4-16 19 5 8 18 5\" fill=\"none\" stroke=\"#c4dccd\" stroke-width=\"7\" stroke-linecap=\"round\"/><path d=\"M8-10q-20-2-13 15\" fill=\"none\" stroke=\"#e9f4ec\" stroke-width=\"1.6\" stroke-linecap=\"round\" opacity=\".7\"/>\n<path d=\"M55-19H10l5 44q17 13 35 0z\" fill=\"#c9e0d2\"/><path d=\"M14.2 18q18.8 10 36.6 0l-.8 7q-17 13-35 0z\" fill=\"#9fc2ad\"/><path d=\"M11-15h43\" stroke=\"#8fb39f\" stroke-width=\"1.2\"/>\n<path d=\"M25 9q4-11 15-11-3 11-15 11z\" fill=\"#7fae8f\"/><path d=\"M26 8q6-6 12-9\" fill=\"none\" stroke=\"#e3f1e6\" stroke-width=\".8\"/>\n<ellipse cx=\"33\" cy=\"-17\" rx=\"20\" ry=\"4\" fill=\"#b08d3e\"/><ellipse cx=\"29\" cy=\"-17.6\" rx=\"9\" ry=\"1.4\" fill=\"#d9bb6a\" opacity=\".6\"/><path d=\"M49-12l-4 29\" stroke=\"#f4fbf6\" stroke-width=\"2\" opacity=\".7\"/>\n<path d=\"M44-17.5q7-5 11.5-1.5l3.5 15\" fill=\"none\" stroke=\"#efe3c8\" stroke-width=\".9\"/><g transform=\"rotate(8 59 1)\"><rect x=\"55\" y=\"-4\" width=\"8\" height=\"10\" rx=\"1.2\" fill=\"#f2e2bf\" stroke=\"#c8ad7a\" stroke-width=\".7\"/><path d=\"M57 3q2-5 4-6-1 5-4 6z\" fill=\"#8fb37d\"/></g></g>\n<g id=\"dcl-cup-steam\" class=\"steam\" fill=\"none\" stroke=\"#f3e4df\" stroke-width=\"2\" stroke-linecap=\"round\"><path class=\"animated\" d=\"M28-25q-4-5 0-10t0-10\"/><path class=\"animated\" d=\"M39-25q-4-5 0-10t0-9\"/></g>\n</g></g>\n\n<!-- 躯干带动肩部和双臂，椅子保持独立 -->\n<g class=\"upper-body\">\n<!-- 双臂由脚本按 IK 实时生成：袖子 → 手 → 袖口，画在躯干之前，被身体自然遮挡 -->\n<g id=\"arm-left\" class=\"rig-arm\"></g><g id=\"arm-right\" class=\"rig-arm\"></g>\n<g class=\"original-outfit\">\n<!-- 外套：肩线、帽兜、布料受力褶皱 -->\n<path d=\"M474 413Q500 425 526 413L552 432Q567 444 572 474L585 582H415L428 474Q433 444 448 432Z\" fill=\"url(#fabric)\" stroke=\"#414d6b\" stroke-width=\"2.5\"/>\n<path d=\"M446 440q-12 40-9 80l-16 53h18l17-73zM554 440q12 40 9 80l16 53h-18l-17-73z\" fill=\"#485574\" opacity=\".45\"/>\n<path d=\"M459 425q40-15 82 0l-7 37q-32 24-68 0z\" fill=\"#505c7c\"/>\n<path d=\"M466 418q34 29 68 0l11 12q-3 29-17 46-28 13-56-2-16-20-17-42z\" fill=\"#aeb8d2\" stroke=\"#687594\" stroke-width=\"2\"/>\n<path d=\"M463 434q37 29 74-1m-68 26q30 17 62 1\" fill=\"none\" stroke=\"#d2d8e7\" stroke-width=\"2\" opacity=\".7\"/>\n<path d=\"M470 461q30 15 60 0l-6 13q-26 10-49-1z\" fill=\"#727f9f\"/>\n<g fill=\"none\" stroke=\"#52617f\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M445 453l-5 32 15 14m-16 8 13-12m-12 34 22-17m93-59 5 32-15 14m16 8-13-12m12 34-22-17M483 486l-8 28 9-6m34-22 8 28-9-6M463 535q37 8 74 0m-81 9 19 5m69-5-19 5\"/></g>\n<path d=\"M447 442l-8 33m114-33 8 33\" stroke=\"#c1d9df\" stroke-width=\"2\" opacity=\".65\"/>\n<path d=\"M486 492h28l-3 21h-22z\" fill=\"#7f91a9\" stroke=\"#aebfd0\"/><path d=\"M493 499l-3 3 3 3m14-6 3 3-3 3m-6-7-3 9\" fill=\"none\" stroke=\"#c5e9de\" stroke-width=\"1.5\"/>\n</g>\n<g class=\"maid-only\">\n<path d=\"M473 414q27 12 54 0l31 25q18 18 18 45l10 97H414l10-97q0-27 18-45z\" fill=\"#272b4a\" stroke=\"#171d35\" stroke-width=\"2\"/>\n<path d=\"M448 433q-14 23-12 48m116-48q14 23 12 48M458 491l-12 52m96-52 12 52\" fill=\"none\" stroke=\"#596182\" stroke-width=\"2\"/>\n<path d=\"M461 425l-12 9 14 81 13-1zM539 425l12 9-14 81-13-1z\" fill=\"url(#lace)\" stroke=\"#a5a8c1\" stroke-width=\"1\"/>\n<path d=\"M447 435l-6 8 9 5-6 9 9 5-5 10 10 4-5 10 11 4m89-55 6 8-9 5 6 9-9 5 5 10-10 4 5 10-11 4\" fill=\"none\" stroke=\"#f5eff4\" stroke-width=\"5\"/>\n<path d=\"M436 515q64 13 128 0l2 14q-66 13-132 0z\" fill=\"url(#lace)\"/>\n<path d=\"M498 521q-37-29-47-10-12 24 43 20l-22 37 20-7 10-28 9 30 20 7-21-39q54 3 42-20-10-18-46 10z\" fill=\"url(#lace)\" stroke=\"#a4a9c1\" stroke-width=\"1.4\"/>\n<path d=\"M460 515l30 10m49-10-29 10m-10 10-15 25m20-25 13 25\" stroke=\"#b4b6ca\" fill=\"none\"/>\n<ellipse cx=\"501\" cy=\"526\" rx=\"7\" ry=\"8\" fill=\"#eeeaf2\" stroke=\"#b2b3c8\"/>\n</g>\n</g>\n<!-- 椅背软垫与缝线 -->\n<rect x=\"413\" y=\"550\" width=\"174\" height=\"110\" rx=\"33\" fill=\"#272e45\" stroke=\"#56617c\" stroke-width=\"3\"/>\n<path d=\"M427 574q8-14 26-15h94q18 1 26 15v66H427z\" fill=\"#3c4662\" stroke=\"#465371\" stroke-width=\"2\"/>\n<path d=\"M438 578q62-14 124 0v62H438z\" fill=\"none\" stroke=\"#6c7690\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/>\n<path d=\"M500 583v36\" stroke=\"#8391ab\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<!-- 发束使用独立分层，随敲击摆动 -->\n<g class=\"head animated original-character\">\n<g class=\"tail-left animated\">\n<path d=\"M444 334C404 318 382 347 384 386S366 458 347 485Q370 480 381 467L371 484Q408 467 421 427C433 393 426 363 444 348Z\" fill=\"url(#hair-depth)\" stroke=\"#3c6279\" stroke-width=\"2\"/>\n<path d=\"M413 350C389 388 403 421 366 469Q395 449 404 413L399 450Q422 409 419 375\" fill=\"#5d9aab\" opacity=\".55\"/>\n<g fill=\"none\" stroke-linecap=\"round\"><path d=\"M407 351C385 392 394 420 363 466M417 361q-1 65-30 99\" stroke=\"#c4f3dc\" stroke-width=\"2\"/><path d=\"M401 368q-5 58-23 83m39-71q-3 34-10 49\" stroke=\"#ecffe7\" stroke-width=\".8\"/><path d=\"M391 392q0 32-13 51\" stroke=\"#48798f\" stroke-width=\"1.3\"/></g>\n<path d=\"M428 339q-22-12-25 2l14 15-5 24 18-15 15-20z\" fill=\"url(#metal)\" stroke=\"#866787\" stroke-width=\"1.5\"/><path d=\"M417 348l-9-6m17 12-8 16\" stroke=\"#f6d0dc\" fill=\"none\"/>\n</g>\n<g class=\"tail-right animated\">\n<path d=\"M556 334C596 318 618 347 616 386S634 458 653 485Q630 480 619 467L629 484Q592 467 579 427C567 393 574 363 556 348Z\" fill=\"url(#hair-depth)\" stroke=\"#3c6279\" stroke-width=\"2\"/>\n<path d=\"M587 350C611 388 597 421 634 469Q605 449 596 413L601 450Q578 409 581 375\" fill=\"#5d9aab\" opacity=\".55\"/>\n<g fill=\"none\" stroke-linecap=\"round\"><path d=\"M593 351C615 392 606 420 637 466M583 361q1 65 30 99\" stroke=\"#c4f3dc\" stroke-width=\"2\"/><path d=\"M599 368q5 58 23 83m-39-71q3 34 10 49\" stroke=\"#ecffe7\" stroke-width=\".8\"/></g>\n<path d=\"M572 339q22-12 25 2l-14 15 5 24-18-15-15-20z\" fill=\"url(#metal)\" stroke=\"#866787\" stroke-width=\"1.5\"/><path d=\"M583 348l9-6m-17 12 8 16\" stroke=\"#f6d0dc\" fill=\"none\"/>\n</g>\n<path d=\"M483 398q17-7 34 0l-2 28q-15 15-30 0z\" fill=\"url(#skin)\" stroke=\"#b18593\" stroke-width=\"1.2\"/>\n<path d=\"M484 403q16 13 32 0l-1 10q-15 9-31 0z\" fill=\"#b67d8c\" opacity=\".5\"/>\n<!-- 耳廓露在发际线外 -->\n<path d=\"M438 353q-15-11-12 11t17 22m119-33q15-11 12 11t-17 22\" fill=\"url(#skin)\" stroke=\"#ae8391\" stroke-width=\"1.5\"/>\n<path d=\"M433 358q-5 7 3 16m131-16q5 7-3 16\" fill=\"none\" stroke=\"#c18e98\" stroke-width=\"1.5\"/>\n<!-- 圆润后脑与分束发梢 -->\n<path d=\"M433 350C428 307 457 277 498 275C544 273 573 305 568 351L562 384 552 406 540 415 538 401 526 420 515 409 502 424 490 413 477 422 467 405 461 415 447 401 440 379Z\" fill=\"url(#hair-depth)\" stroke=\"#3c6478\" stroke-width=\"2.2\"/>\n<path d=\"M500 281C463 293 459 324 461 358L470 399 477 413Q469 378 478 341C483 315 486 296 500 281Z\" fill=\"#c6efdc\" opacity=\".38\"/>\n<path d=\"M503 283q38 24 36 70l-10 49 10-11 11-39q2-46-47-69\" fill=\"#497d94\" opacity=\".4\"/>\n<g fill=\"none\" stroke-linecap=\"round\"><path d=\"M488 286q-46 17-42 65m47-59q-31 33-27 77m37-82q25 27 25 68m-17-62q39 27 36 65\" stroke=\"#dcffe8\" stroke-width=\"2\" opacity=\".7\"/><path d=\"M482 310q-13 41-6 75m22-83q-17 55-6 97m15-74q12 39 2 78m28-69q5 34-6 61\" stroke=\"#4d8b9d\" stroke-width=\"1.4\" opacity=\".8\"/><path d=\"M455 352l6 31m22-25 2 34m33-47-3 38m38-29-8 28\" stroke=\"#b5e8d5\" stroke-width=\"1\"/></g>\n<path d=\"M449 324Q493 309 550 326L553 334Q502 320 447 334Z\" fill=\"#deffe8\" opacity=\".26\"/>\n<path d=\"M493 277q-15-22 3-31-5 16 7 24 6-17 17-14-12 7-14 22\" fill=\"#a7dfcd\" stroke=\"#4b7a8c\" stroke-width=\"1.5\"/>\n<!-- 耳机：双层头梁、转轴、金属壳与耳垫 -->\n<path d=\"M432 352C429 300 455 269 500 269S572 300 568 352\" fill=\"none\" stroke=\"#26324b\" stroke-width=\"10\"/>\n<path d=\"M432 340C434 297 458 273 500 273S566 297 568 340\" fill=\"none\" stroke=\"#b2c6d1\" stroke-width=\"2\"/>\n<path d=\"M451 290q49-33 98 0\" fill=\"none\" stroke=\"#5d6c86\" stroke-width=\"5\"/>\n<g><rect x=\"424\" y=\"347\" width=\"19\" height=\"44\" rx=\"9\" fill=\"#263349\"/><rect x=\"422\" y=\"350\" width=\"15\" height=\"37\" rx=\"7\" fill=\"url(#metal)\" stroke=\"#e1bfd1\" stroke-width=\"1\"/><path d=\"M427 358v18\" stroke=\"#f6dee6\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"432\" cy=\"345\" r=\"4\" fill=\"#6c7a94\"/>\n<rect x=\"557\" y=\"347\" width=\"19\" height=\"44\" rx=\"9\" fill=\"#263349\"/><rect x=\"563\" y=\"350\" width=\"15\" height=\"37\" rx=\"7\" fill=\"url(#metal)\" stroke=\"#e1bfd1\" stroke-width=\"1\"/><path d=\"M572 358v18\" stroke=\"#f6dee6\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"568\" cy=\"345\" r=\"4\" fill=\"#6c7a94\"/><circle cx=\"571\" cy=\"381\" r=\"2\" fill=\"#a1f5d8\"/></g>\n</g>\n<g class=\"head animated maid-only\">\n<!-- 长发沿背部自然垂落，以淡蓝色内层呼应参考图 -->\n<path d=\"M438 331C418 370 432 406 416 446S395 491 410 519Q425 534 442 515L431 535Q457 535 471 512L465 536 489 523 503 536 522 520 536 533 535 512Q560 539 583 522L570 521Q600 505 582 470C563 433 584 389 563 335Z\" fill=\"url(#blue-hair)\" stroke=\"#20283f\" stroke-width=\"2.2\"/>\n<path d=\"M443 370C432 420 451 445 426 485Q413 507 426 517Q419 502 440 485C461 464 446 426 458 393M557 373C572 420 552 448 574 483Q590 511 568 516Q577 503 558 482C540 461 555 426 542 392\" fill=\"#6eabc0\" opacity=\".65\"/>\n<g fill=\"none\" stroke-linecap=\"round\" stroke=\"#7d9fc2\" stroke-width=\"1.4\" opacity=\".75\"><path d=\"M448 355q-13 53 0 102t-19 62M463 364q-10 54 0 102t-11 55M480 370q-12 57-1 91t-5 60M501 369q-9 53 1 95t-3 60M521 371q15 49 2 89t9 62M541 363q17 54 5 101t20 54M558 358q12 38 3 74\"/></g>\n<!-- 两侧鱼鳍状耳饰 -->\n<path d=\"M441 335q-18 26-46 36 22 7 45-2l12-22m107-12q18 26 46 36-22 7-45-2l-12-22\" fill=\"#303654\" stroke=\"#1d2239\" stroke-width=\"2\"/>\n<path d=\"M401 370l7-5 4 5 7-6 5 4 10-5m165 7-7-5-4 5-7-6-5 4-10-5\" fill=\"none\" stroke=\"#d3d6e4\" stroke-width=\"4\"/>\n<path d=\"M435 346C427 304 457 275 499 275S575 304 565 350L557 385Q531 405 500 410 468 405 441 384Z\" fill=\"url(#blue-hair)\" stroke=\"#212840\" stroke-width=\"2\"/>\n<path d=\"M497 282q-43 18-48 62m49-55q-28 32-24 83m31-81q25 33 24 82m-15-87q36 18 40 59\" fill=\"none\" stroke=\"#6c8db4\" stroke-width=\"2\"/>\n<path d=\"M449 321l10-10 6 7 13-12 8 7 13-8 11 8 12-4 10 10 11-3 10 15\" fill=\"none\" stroke=\"#8cb3cf\" stroke-width=\"5\" opacity=\".4\"/>\n<path d=\"M458 354q-5 29 11 40m14-46q-4 36 9 52m18-52q9 34-1 51m29-49q5 25-9 43\" fill=\"none\" stroke=\"#28365e\" stroke-width=\"1.3\"/>\n<!-- 荷叶发箍与层叠褶边 -->\n<path d=\"M431 327Q432 266 500 262 566 266 570 327L558 321Q550 280 500 278 450 280 443 321Z\" fill=\"url(#lace)\" stroke=\"#9b9fb9\" stroke-width=\"1.5\"/>\n<path d=\"M426.0 328.0l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M428.3 311.4l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M435.0 296.0l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M445.6 282.7l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M459.5 272.6l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M475.7 266.2l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M493.0 264.0l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M510.3 266.2l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M526.5 272.6l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M540.4 282.7l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M551.0 296.0l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M557.7 311.4l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M560.0 328.0l-3-12 5-5 6 3 5-2 5 7-4 12\" fill=\"url(#lace)\" stroke=\"#aaaac0\" stroke-width=\"1\"/>\n<path d=\"M440 319q7-46 60-47 54 1 62 47\" fill=\"none\" stroke=\"#f9f7f7\" stroke-width=\"3\"/>\n<path d=\"M490 266C467 220 439 249 447 268Q433 261 444 241C465 214 493 240 496 262\" fill=\"#3f507e\" stroke=\"#20273f\" stroke-width=\"1.5\"/>\n<g fill=\"#65a9c4\" stroke=\"#294b6e\" stroke-width=\"1.3\"><path d=\"M563 326l-12-10-4 18 15 1 7 13 7-18z\"/><circle cx=\"563\" cy=\"331\" r=\"4\"/></g>\n</g>\n<!-- 休息时头顶右上角飘起的 Zzz -->\n<g class=\"zzz\" aria-hidden=\"true\" transform=\"translate(580 300)\"><text class=\"animated\" font-size=\"13\">Z</text><text class=\"animated\" x=\"12\" y=\"-14\" font-size=\"17\">Z</text><text class=\"animated\" x=\"26\" y=\"-31\" font-size=\"21\">Z</text><text class=\"animated\" x=\"42\" y=\"-51\" font-size=\"26\">Z</text></g>\n<g class=\"speed-lines\" stroke=\"#ffe5db\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M340 398l-14-17m17 40-26-5m343-18 14-17m-17 40 26-5M385 396l-6-17m236 17 6-17\"/></g>\n</g>\n</svg><canvas id=\"dcl-smoke\" aria-hidden=\"true\"></canvas></div><div class=\"dcl-scene-stubs\" aria-hidden=\"true\"><input id=\"dcl-intensity\" type=\"range\" min=\"0\" max=\"100\" value=\"85\" tabindex=\"-1\"><output id=\"dcl-value\"></output><span id=\"dcl-state\"></span><button id=\"dcl-pause\" type=\"button\" tabindex=\"-1\"></button><button id=\"dcl-burst\" type=\"button\" tabindex=\"-1\"></button><button id=\"dcl-coffee\" type=\"button\" tabindex=\"-1\"></button><select id=\"dcl-character\" tabindex=\"-1\"><option value=\"mint\">mint</option><option value=\"maid\">maid</option></select><select id=\"dcl-drink\" tabindex=\"-1\"><option value=\"coffee\">coffee</option><option value=\"tea\">tea</option></select><button id=\"dcl-rest\" type=\"button\" tabindex=\"-1\"></button><span id=\"dcl-character-note\"></span><div id=\"dcl-page-code-content\"></div><textarea id=\"dcl-wall-source\"></textarea><button id=\"dcl-apply-wall\" type=\"button\" tabindex=\"-1\"></button><span id=\"dcl-wall-feedback\"></span></div>",
      css: ".dcl-scene .scene{position:relative;border:1px solid #354058;border-radius:20px;overflow:hidden;background:#1d2941;aspect-ratio:1000/640;isolation:isolate}\n.dcl-scene .scene svg, .dcl-scene .scene canvas{position:absolute;inset:0;width:100%;height:100%}\n.dcl-scene .scene canvas{pointer-events:none}\n.dcl-scene .tail-left{animation:dclScnSway calc(var(--speed)*6) ease-in-out infinite;transform-origin:438px 350px}\n.dcl-scene .tail-right{animation:dclScnSway calc(var(--speed)*6) ease-in-out infinite reverse;transform-origin:562px 350px}\n.dcl-scene .paused .animated{animation-play-state:paused!important}\n.dcl-scene .speed-lines{opacity:0}\n.dcl-scene .berserk .speed-lines{opacity:.65}\n.dcl-scene .berserk .screen-glow{opacity:.45}\n@keyframes dclScnSway{50%{transform:rotate(3deg)}}\n.dcl-scene .scene{background:transparent;border-color:#56708740;box-shadow:inset 0 0 90px #10172622}\n.dcl-scene .idle .tail-left, .dcl-scene .idle .tail-right{animation-duration:4.5s}\n.dcl-scene .rig-arm .sleeve{fill:url(#fabric)}\n.dcl-scene .rig-arm .sleeve-line{fill:#424d6a;stroke:#424d6a;stroke-width:4;stroke-linejoin:round}\n.dcl-scene .scene.maid .rig-arm .sleeve-line{fill:#171d35;stroke:#171d35}\n.dcl-scene .rig-arm .crease{fill:none;stroke:#36415c;stroke-width:1.2;stroke-linecap:round;opacity:.55}\n.dcl-scene .scene.maid .rig-arm .crease{stroke:#5a6386}\n.dcl-scene .rig-arm .cuff{fill:#bdc6dc;stroke:#6c7797;stroke-width:1.2;stroke-linejoin:round}\n.dcl-scene .scene.maid .rig-arm .cuff{fill:url(#lace);stroke:#9fa4bd}\n.dcl-scene .rig-arm .cuff-line{fill:none;stroke:#8e98b4;stroke-width:.8}\n.dcl-scene .scene.maid .rig-arm .cuff-line{stroke:#c3c6d8}\n.dcl-scene .steam path{opacity:0;animation:dclScnSteam 3.2s ease-in-out infinite}\n.dcl-scene .steam path+path{animation-delay:-1.6s}\n@keyframes dclScnSteam{0%{opacity:0;transform:translateY(3px)}35%{opacity:.45}100%{opacity:0;transform:translateY(-9px)}}\n.dcl-scene .drinking .speed-lines{opacity:0}\n.dcl-scene .resting .speed-lines{opacity:0}\n.dcl-scene .resting .tail-left, .dcl-scene .resting .tail-right{animation-duration:6s}\n.dcl-scene .zzz{display:none;font-family:'Avenir Next','PingFang SC',sans-serif;font-weight:800;fill:#eef0ff;stroke:#262d4b;stroke-width:3;stroke-linejoin:round;paint-order:stroke}\n.dcl-scene .scene.resting .zzz{display:inline}\n.dcl-scene .zzz text{opacity:0;transform-box:fill-box;transform-origin:center;animation:zzz 4s ease-out infinite}\n.dcl-scene .zzz text:nth-child(2){animation-delay:-1s}\n.dcl-scene .zzz text:nth-child(3){animation-delay:-2s}\n.dcl-scene .zzz text:nth-child(4){animation-delay:-3s}\n@keyframes zzz{0%{opacity:0;transform:translate(0,4px) scale(.5) rotate(-12deg)}15%{opacity:1}50%{transform:translate(14px,-20px) scale(.95) rotate(4deg)}75%{opacity:.9}100%{opacity:0;transform:translate(30px,-44px) scale(1.25) rotate(12deg)}}\n.dcl-scene .maid-only{display:none}\n.dcl-scene .scene.maid .maid-only{display:inline}\n.dcl-scene .scene.maid .original-character, .dcl-scene .scene.maid .original-outfit{display:none}\n.dcl-scene .scene.maid #fabric stop:nth-child(1){stop-color:#505577}\n.dcl-scene .scene.maid #fabric stop:nth-child(2){stop-color:#343b61}\n.dcl-scene .scene.maid #fabric stop:nth-child(3){stop-color:#292e4e}\n.dcl-scene .scene.maid #fabric stop:nth-child(4){stop-color:#1c213c}\n.dcl-scene .tea-only{display:none}\n.dcl-scene .scene.tea .tea-only{display:inline}\n.dcl-scene .scene.tea .coffee-only{display:none}",
      rig: "\nconst scene=document.querySelector('#dcl-scene'),slider=document.querySelector('#dcl-intensity'),state=document.querySelector('#dcl-state'),value=document.querySelector('#dcl-value'),pause=document.querySelector('#dcl-pause'),burst=document.querySelector('#dcl-burst');\nconst characterPicker=document.querySelector('#dcl-character');\nfunction setCharacter(name){const maid=name==='maid';scene.classList.toggle('maid',maid);characterPicker.value=maid?'maid':'mint';document.querySelector('#dcl-character-note').textContent=maid?'深蓝长发 / 荷叶头饰 / 围裙系带 / 鱼尾':'薄荷双马尾 / 耳机 / 宽松外套';scene.querySelector('svg').setAttribute('aria-label',maid?'深蓝长发、白色荷叶头饰的女仆背对观众在电脑前编码':'薄荷色双马尾少女背对观众在电脑前编码');}\ncharacterPicker.addEventListener('change',()=>setCharacter(characterPicker.value));window.setCharacter=setCharacter;setCharacter('maid');\n// 饮品：杯子轮廓与杯柄位置一致，切换只改外观和文案，喝的动作完全复用\nconst DRINKS={coffee:{icon:'☕',verb:'喝咖啡',status:'咖啡补给中 · 灵感续杯'},tea:{icon:'🍵',verb:'喝茶',status:'热茶慢饮中 · 心静码自清'}},drinkPicker=document.querySelector('#dcl-drink');\nlet drinkKind='coffee';\nfunction setDrink(name){drinkKind=name==='tea'?'tea':'coffee';scene.classList.toggle('tea',drinkKind==='tea');drinkPicker.value=drinkKind;updateDrinkButton();if(drinking)state.textContent=DRINKS[drinkKind].status}\nfunction updateDrinkButton(){const d=DRINKS[drinkKind],btn=document.querySelector('#dcl-coffee');btn.textContent=`${d.icon} ${drinking?'正在喝…':d.verb}`}\ndrinkPicker.addEventListener('change',()=>setDrink(drinkPicker.value));window.setDrink=setDrink;\nconst canvas=document.querySelector('#dcl-smoke'),ctx=canvas.getContext('2d');\nlet drinking=false,drinkTime=0,resting=false;\nlet intensity=.4,paused=false,particles=[],last=0,clock=0,emission=0,codeClock=0;\nconst reduced=matchMedia('(prefers-reduced-motion: reduce)');\nfunction setCodingIntensity(n){intensity=Math.max(0,Math.min(1,Number(n)||0));slider.value=Math.round(intensity*100);value.value=Math.round(intensity*100)+'%';scene.style.setProperty('--speed',(0.36-intensity*.29)+'s');scene.classList.toggle('berserk',intensity>.75);scene.classList.toggle('idle',intensity===0);state.textContent=drinking?DRINKS[drinkKind].status:resting?'休息中 · 小睡一会儿 Zzz':paused?'休息一下，灵感正在路上':intensity===0?'摸鱼中 · 键盘也需要休息':intensity>.75?'暴走模式 · 键盘过热！':'专注编码中';burst.textContent=intensity>.75?'恢复正常':'✦ 开启暴走';}\nwindow.setCodingIntensity=setCodingIntensity;\nslider.addEventListener('input',()=>setCodingIntensity(slider.value/100));burst.addEventListener('click',()=>setCodingIntensity(intensity>.75?.4:1));pause.addEventListener('click',()=>{paused=!paused;scene.classList.toggle('paused',paused);pause.textContent=paused?'继续动画':'暂停动画';pause.setAttribute('aria-pressed',String(paused));setCodingIntensity(intensity)});\nconst coffeeButton=document.querySelector('#dcl-coffee'),coffeeCup=document.querySelector('#dcl-coffee-cup'),cupShadow=document.querySelector('#dcl-cup-shadow'),cupSteam=document.querySelector('#dcl-cup-steam');\nconst upperBody=document.querySelector('.upper-body'),heads=document.querySelectorAll('.head'),keyboard=document.querySelector('.keyboard');\n// ---- 角色骨骼：身体、头、双臂、手指与咖啡杯统一在这里驱动 ----\n// 手臂用两段式 IK 求肘部，手腕始终落在目标点；握杯时手腕由杯子的位置和角度反推，杯柄与手指不会错位。\nconst D2R=Math.PI/180,f2=n=>n.toFixed(2),clamp01=n=>Math.max(0,Math.min(1,n)),lerp=(a,b,t)=>a+(b-a)*t;\nconst ease=n=>{n=clamp01(n);return n*n*(3-2*n)},easeInOut=n=>{n=clamp01(n);return n<.5?4*n*n*n:1-Math.pow(2-2*n,3)/2},easeOut=n=>1-Math.pow(1-clamp01(n),3);\nconst mix=(a,b,t)=>({x:lerp(a.x,b.x,t),y:lerp(a.y,b.y,t)}),bez=(a,c,b,t)=>mix(mix(a,c,t),mix(c,b,t),t),bump=(t,c,w)=>Math.max(0,1-((t-c)/w)**2);\nfunction spring(s,target,k,zeta,dt){s.v+=(k*(target-s.x)-2*zeta*Math.sqrt(k)*s.v)*dt;s.x+=s.v*dt}\nconst fingerPath=(L,w)=>{const r=w/2,t=w*.39;return `M${r} 0L${f2(t)} ${f2(-L+t)}A${f2(t)} ${f2(t)} 0 0 0 ${f2(-t)} ${f2(-L+t)}L${-r} 0A${r} ${r} 0 0 0 ${r} 0Z`};\n// 左手局部坐标：原点在手腕，指尖朝 -y，拇指在 +x；右手整体镜像。每根手指为 [x, y, 角度, 长度, 宽度]。\n// 背后视角看到的是手背，手指向下扣在键盘上，因此指节短、只露出一点指甲。\nconst TYPE_FINGERS=[[5,-4,36,11,4.9],[-7,-14,-19,8.2,3.9],[-3,-15.6,-7,10,4.3],[1.6,-16.2,1,11.2,4.5],[6,-15.2,11,9.8,4.3]];\nconst GRIP_FINGERS=[[-6.6,-16,-4,7.2,4.2],[-2.2,-16.6,-1,8,4.5],[2.2,-16.6,1,8,4.5],[6.4,-16,4,7,4.2]];\nconst SKIN='fill=\"url(#skin)\" stroke=\"#a97a8a\"';\nconst fingerSvg=([x,y,a,L,w],cls,nail)=>`<g class=\"${cls}\" transform=\"translate(${x} ${y}) rotate(${a})\"><path d=\"${fingerPath(L,w)}\" ${SKIN} stroke-width=\".9\" stroke-linejoin=\"round\"/>${nail?`<path d=\"M${f2(-w*.3)} ${f2(-L+w*.62)}q${f2(w*.3)} ${f2(-w*.42)} ${f2(w*.6)} 0\" fill=\"none\" stroke=\"#c98f99\" stroke-width=\".55\" stroke-linecap=\"round\"/><ellipse cy=\"${f2(-L+w*.42)}\" rx=\"${f2(w*.22)}\" ry=\"${f2(w*.25)}\" fill=\"#fdebe2\" opacity=\".9\"/>`:''}</g>`;\nconst ARM_SVG=`<path class=\"sleeve-line\"/><path class=\"sleeve\"/><path class=\"crease\"/><g class=\"hand\">\n<g class=\"hand-type\">${TYPE_FINGERS.map(d=>fingerSvg(d,'finger',true)).join('')}<path d=\"M-5.6 1C-7.2-4-9.6-9-9.4-14Q-9-17.4-6.2-17.4Q-4.6-19.4-1.4-18.7Q1.2-20.1 3.8-18.7Q7.4-19.1 8.8-16Q9.9-12 9-8C8.2-4.5 7-1.5 6 1Z\" ${SKIN} stroke-width=\"1\"/><path d=\"M-7.9-13.5Q-6.8-6.5-4.6-1.2\" fill=\"none\" stroke=\"#fff2e8\" stroke-width=\"1.3\" stroke-linecap=\"round\" opacity=\".55\"/><path d=\"M-7.6-15.6Q0-19.8 7.6-15.9\" fill=\"none\" stroke=\"#fff0e6\" stroke-width=\".9\" stroke-linecap=\"round\" opacity=\".5\"/><path d=\"M-1.5-4.5Q-2-10-2.6-14.5\" fill=\"none\" stroke=\"#d9a3a6\" stroke-width=\".6\" opacity=\".45\"/></g>\n<g class=\"hand-grip\" visibility=\"hidden\">${GRIP_FINGERS.map(d=>fingerSvg(d,'stub',false)).join('')}<path d=\"M-6.2 1C-8-4-9.6-9-9.2-14Q-8.6-18.6-5-18.8L5-19Q9-18.6 9.4-13.5C9.6-8.5 8.4-4 6.6 1Z\" ${SKIN} stroke-width=\"1\"/><path d=\"M-8.6-20.6q8.6 1.6 17.4 0\" fill=\"none\" stroke=\"#c48f98\" stroke-width=\".7\"/><path d=\"M-7.6-13Q-6.6-6.5-4.6-1.2\" fill=\"none\" stroke=\"#fff2e8\" stroke-width=\"1.3\" stroke-linecap=\"round\" opacity=\".55\"/>${fingerSvg([7.4,-6,-6,14.5,4.8],'thumb',true)}</g>\n</g><g class=\"cuff-g\"><path class=\"cuff\" d=\"M-8.8-2.2Q0-5.4 8.8-2.2L8.2 5.2Q0 2.4-8.2 5.2Z\"/><path class=\"cuff-line\" d=\"M-7.8 1.4Q0-1.6 7.8 1.4\"/></g>`;\nfunction buildArm(id){const el=document.getElementById(id);el.innerHTML=ARM_SVG;const q=s=>el.querySelector(s);return {line:q('.sleeve-line'),sleeve:q('.sleeve'),crease:q('.crease'),hand:q('.hand'),type:q('.hand-type'),grip:q('.hand-grip'),cuff:q('.cuff-g'),fingers:[...el.querySelectorAll('.finger')],stubs:[...el.querySelectorAll('.stub')]}}\nconst arms={left:buildArm('arm-left'),right:buildArm('arm-right')};\n// 肩点在躯干内部（被衣服盖住）。前臂朝向屏幕时有透视缩短，伸向侧面时变长，所以骨长随姿势插值。\nconst SHOULDER={left:{x:451,y:447},right:{x:549,y:447}};\nconst BONES={type:[54,62],reach:[58,78],sip:[60,92]},POLES={type:{x:12,y:70},reach:{x:60,y:45},sip:{x:80,y:5}};\nconst CUP_DESK={x:642,y:425},CUP_SIP={x:516,y:388},CUP_CTRL={x:668,y:340},GRIP_REL=80,DRINK_T=5.8;\nconst body={y:0,r:0},motion={rest:{x:0,v:0},bounce:{x:0,v:0},hy:{x:0,v:0},ha:{x:0,v:0},kb:{x:0,v:0}},rigHands={left:{x:0,y:0},right:{x:0,y:0}};\nlet rigClock=0,drinkStart=null;\nfunction makeTyper(sign){return {sign,px:{x:0,v:0},py:{x:0,v:0},pa:{x:12*sign,v:0},dip:{x:0,v:0},tx:0,ty:0,next:Math.random()*.3,count:0,keys:[-1,-1,-1,-1,-1],ready:false}}\nconst typers={left:makeTyper(1),right:makeTyper(-1)};\n// 单次击键：先抬指（指尖前伸）再落下（指尖缩短），落下瞬间手腕、身体和键盘一起受力。\nconst fingerExt=u=>u<.45?1.8*Math.sin(Math.PI*u/.45):-1.4*Math.sin(Math.PI*(u-.45)/.55);\nfunction strike(h){let i=Math.random()<.14?0:1+Math.floor(Math.random()*4);if(h.keys[i]>=0)i=1+i%4;h.keys[i]=0;if(++h.count%3===0){h.tx=(Math.random()*2-1)*5.5;h.ty=(Math.random()*2-1)*2.6}}\nfunction updateTyper(h,dt,rate,home,still){\n  if(!h.ready){h.px.x=home.x;h.py.x=home.y;h.ready=true}\n  if(rate>0){h.next-=dt;while(h.next<=0){h.next+=(.45+Math.random()*1.1)/rate;strike(h)}}\n  else{h.tx=still?0:Math.sin(rigClock*.5+h.sign)*1.2;h.ty=still?0:Math.cos(rigClock*.4)*.6}\n  const dur=lerp(.22,.11,intensity);\n  for(let i=0;i<5;i++){if(h.keys[i]<0)continue;const before=h.keys[i];h.keys[i]+=dt/dur;if(before<.45&&h.keys[i]>=.45){h.dip.v+=16+28*intensity;motion.bounce.v+=1.2+2.6*intensity;motion.kb.v+=(Math.random()-.5)*24*intensity}if(h.keys[i]>=1)h.keys[i]=-1}\n  const k=resting?24:lerp(70,240,intensity);\n  spring(h.px,home.x+h.tx,k,.72,dt);spring(h.py,home.y+h.ty,k,.72,dt);spring(h.dip,0,420,.45,dt);spring(h.pa,h.sign*12+h.tx*.8,90,.8,dt);\n}\nfunction fingerOffsets(h){const e=h.keys.map(u=>u<0?0:fingerExt(u));return e.map((v,i)=>i===0?v:v+.25*((i>1?e[i-1]:0)+(i<4?e[i+1]:0)))}\nconst wristFromGrip=(g,a)=>({x:g.x-20*Math.sin(a*D2R),y:g.y+20*Math.cos(a*D2R)});\n// 喝咖啡时间线（秒）：预备 → 弧线伸手 → 滑入握柄 → 抬杯 → 啜饮两口 → 原路放回 → 松手 → 回到键盘\nfunction drinkPose(t,live){\n  const s=drinkStart,from={x:s.x-2,y:s.y-4},pre=wristFromGrip({x:CUP_DESK.x-9,y:CUP_DESK.y-6},GRIP_REL),held=wristFromGrip(CUP_DESK,GRIP_REL),sipEnd={x:CUP_SIP.x-3,y:CUP_SIP.y-2};\n  const gulp=bump(t,2.85,.12)+bump(t,3.2,.12);let cup={...CUP_DESK,a:0},wrist,angle;\n  if(t>=1.5&&t<2.45){const u=(t-1.5)/.95;cup={...bez(CUP_DESK,CUP_CTRL,CUP_SIP,easeInOut(u)),a:-10*ease(u)}}\n  else if(t>=2.45&&t<3.55){const u=ease((t-2.45)/.45);cup={...mix(CUP_SIP,sipEnd,u),a:lerp(-10,-30,u)-2*gulp}}\n  else if(t>=3.55&&t<4.45){const u=(t-3.55)/.9;cup={...bez(sipEnd,CUP_CTRL,CUP_DESK,easeInOut(u)),a:lerp(-30,0,ease(u/.85))}}\n  if(t<.3){wrist=mix(s,from,ease(t/.3));angle=s.a}\n  else if(t<1.1){wrist=bez(from,{x:(from.x+pre.x)/2,y:Math.min(from.y,pre.y)-26},pre,easeInOut((t-.3)/.8));angle=lerp(s.a,GRIP_REL,easeInOut((t-.3)/.75))}\n  else if(t<1.35){wrist=mix(pre,held,easeOut((t-1.1)/.25));angle=GRIP_REL}\n  else if(t<4.45){angle=GRIP_REL+cup.a;wrist=wristFromGrip(cup,angle);if(t<1.5)wrist.y+=.8*Math.sin((t-1.35)/.15*Math.PI)}\n  else if(t<4.65){wrist=mix(held,pre,easeInOut((t-4.45)/.2));angle=GRIP_REL}\n  else{wrist=bez(pre,{x:(pre.x+live.x)/2,y:Math.min(pre.y,live.y)-18},live,easeInOut((t-4.65)/.95));angle=lerp(GRIP_REL,live.a,easeInOut((t-4.65)/.8))}\n  return {wrist,angle,cup,gulp,grip:ease((t-1.02)/.3)*(1-ease((t-4.42)/.22)),\n    wReach:ease((t-.3)/.8)*(1-ease((t-4.65)/.95)),wSip:ease((t-1.5)/.95)*(1-ease((t-3.55)/.9)),tilt:ease((t-2.1)/.5)*(1-ease((t-3.45)/.5)),\n    lean:ease((t-.2)/.9)*(1-ease((t-4.5)/1.1))*(1-.6*ease((t-1.6)/.8)+.6*ease((t-3.6)/.6))};\n}\nfunction toLocal(p){const c=Math.cos(body.r*D2R),s=Math.sin(body.r*D2R),x=p.x-500,y=p.y-body.y-554;return {x:500+x*c+y*s,y:554-x*s+y*c}}\nfunction solveElbow(S,W,pole,upper,fore){\n  const vx=W.x-S.x,vy=W.y-S.y,len=Math.hypot(vx,vy)||1,ux=vx/len,uy=vy/len,d=Math.min(len,upper+fore-.5);\n  const along=(upper*upper-fore*fore+d*d)/(2*d),h=Math.sqrt(Math.max(0,upper*upper-along*along));\n  const side=Math.sign(ux*(pole.y-S.y)-uy*(pole.x-S.x))||1; // 肘部弯向极点所在的一侧\n  return {x:S.x+ux*along-uy*h*side,y:S.y+uy*along+ux*h*side};\n}\n// 袖子 = 上臂、前臂两段锥形 + 圆形肘关节；三段同向绕行，填充时自然合并。\n// 描边单独画在底层（sleeve-line），上层只填色，所以关节处不会出现内部接缝。\nfunction sleevePath(S,E,W){\n  const n=(a,b)=>{const dx=b.x-a.x,dy=b.y-a.y,l=Math.hypot(dx,dy)||1;return {x:-dy/l,y:dx/l}},n1=n(S,E),n2=n(E,W),r=9.5;\n  const p=(q,v,w)=>`${f2(q.x+v.x*w)} ${f2(q.y+v.y*w)}`;\n  return `M${p(S,n1,11)}L${p(E,n1,r)}L${p(E,n1,-r)}L${p(S,n1,-11)}ZM${p(E,n2,r)}L${p(W,n2,7.6)}L${p(W,n2,-7.6)}L${p(E,n2,-r)}ZM${f2(E.x-r)} ${f2(E.y)}a${r} ${r} 0 1 0 ${2*r} 0a${r} ${r} 0 1 0 ${-2*r} 0Z`;\n}\nfunction creasePath(S,E,W){const m={x:(S.x+W.x)/2-E.x,y:(S.y+W.y)/2-E.y},l=Math.hypot(m.x,m.y)||1,nx=m.x/l,ny=m.y/l,a=mix(E,S,.28),b=mix(E,W,.28);return `M${f2(a.x+nx*3)} ${f2(a.y+ny*3)}Q${f2(E.x+nx*5)} ${f2(E.y+ny*5)} ${f2(b.x+nx*3)} ${f2(b.y+ny*3)}`}\nfunction drawArm(arm,S,wristW,angleW,grip,ext,mirror,poleOff,[upper,fore]){\n  const W=toLocal(wristW),E=solveElbow(S,W,{x:S.x+poleOff.x,y:S.y+poleOff.y},upper,fore);\n  // 袖口角度介于前臂与手掌之间，盖住手腕弯折处\n  const fa=Math.atan2(W.x-E.x,E.y-W.y)/D2R,ha=angleW-body.r,ca=fa+(((ha-fa)%360+540)%360-180)*.35,fx=Math.sin(fa*D2R),fy=-Math.cos(fa*D2R);\n  const sd=sleevePath(S,E,{x:W.x-fx*2.5,y:W.y-fy*2.5});arm.line.setAttribute('d',sd);arm.sleeve.setAttribute('d',sd);arm.crease.setAttribute('d',creasePath(S,E,W));\n  arm.hand.setAttribute('transform',`translate(${f2(W.x)} ${f2(W.y)}) rotate(${f2(ha)}) scale(${mirror} 1)`);\n  arm.cuff.setAttribute('transform',`translate(${f2(W.x)} ${f2(W.y)}) rotate(${f2(ca)})`);\n  // 握杯：手指先向掌心收拢，过半后换成握持手型，弯曲的指节再展开包住杯柄\n  const curl=clamp01(grip*2),closed=grip>=.5;\n  arm.type.setAttribute('visibility',closed?'hidden':'visible');arm.grip.setAttribute('visibility',closed?'visible':'hidden');\n  arm.fingers.forEach((g,i)=>{const [x,y,a]=TYPE_FINGERS[i],e=ext[i]*(1-curl);g.setAttribute('transform',`translate(${f2(x+e*Math.sin(a*D2R))} ${f2(y-e*Math.cos(a*D2R))}) rotate(${a}) scale(1 ${f2(1-.45*curl)})`)});\n  if(closed){const sc=.65+.35*clamp01(grip*2-1);arm.stubs.forEach((g,i)=>{const [x,y,a]=GRIP_FINGERS[i];g.setAttribute('transform',`translate(${x} ${y}) rotate(${a}) scale(1 ${f2(sc)})`)})}\n}\nfunction updateRig(dt){\n  const still=reduced.matches,maid=scene.classList.contains('maid'),spread=maid?26:0,homeY=maid?469:467;\n  rigClock+=dt;\n  spring(motion.rest,resting?1:0,8,1,dt);const r=clamp01(motion.rest.x),breath=still?0:Math.sin(rigClock*1.2);\n  const rate=still||resting||intensity===0?0:lerp(2.2,10,intensity),restY=homeY+2.5*r;\n  // 喝咖啡时左手放慢成单手轻敲，右手的打字状态继续跟随，作为放下杯子后回到键盘的落点；休息时双手静止\n  updateTyper(typers.left,dt,drinking?Math.min(rate,1.3):rate,{x:423-spread,y:restY},still||resting);\n  updateTyper(typers.right,dt,drinking?0:rate,{x:577+spread,y:restY},still||resting);\n  const L=typers.left,R=typers.right,live={x:R.px.x,y:R.py.x+R.dip.x,a:R.pa.x};\n  let p={wrist:live,angle:live.a,grip:0,wReach:0,wSip:0,tilt:0,gulp:0,lean:0,cup:{...CUP_DESK,a:0}};\n  if(drinking){drinkTime+=dt;p=drinkPose(drinkTime,live);if(drinkTime>=DRINK_T)finishDrink()}\n  // 身体：呼吸 + 击键反冲；头部用弹簧滞后跟随，形成跟随动作\n  spring(motion.bounce,0,260,.4,dt);spring(motion.kb,0,500,.3,dt);\n  body.y=lerp(still?0:.8*Math.sin(rigClock*1.65),1.5*breath,r)+2.2*r+motion.bounce.x-p.tilt*.8;\n  body.r=(still?0:.22*Math.sin(rigClock*.83))*(1-r)+.35*r+p.lean*.9;\n  spring(motion.hy,motion.bounce.x*.5-p.tilt*2.2+p.gulp*.9+r*(3.6+.9*Math.sin(rigClock*1.2-.6)*(still?0:1)),70,.55,dt);\n  spring(motion.ha,p.tilt*2.4-p.lean*.35+(still?0:.35*Math.sin(rigClock*.6))+r*(3.2+(still?0:.6*Math.sin(rigClock*.5))),50,.7,dt);\n  const bt=`translate(0 ${f2(body.y)}) rotate(${f2(body.r)} 500 554)`;\n  upperBody.setAttribute('transform',bt);\n  heads.forEach(h=>h.setAttribute('transform',`${bt} translate(${f2(p.tilt*1.2+r*1.2)} ${f2(motion.hy.x)}) rotate(${f2(motion.ha.x)} 500 408)`));\n  keyboard.setAttribute('transform',`translate(${f2(motion.kb.x)} 0)`);\n  const lw={x:L.px.x,y:L.py.x+L.dip.x};\n  drawArm(arms.left,SHOULDER.left,lw,L.pa.x,0,fingerOffsets(L),1,{x:-POLES.type.x,y:POLES.type.y},BONES.type);\n  const pole=mix(mix(POLES.type,POLES.reach,p.wReach),POLES.sip,p.wSip),bones=[0,1].map(i=>lerp(lerp(BONES.type[i],BONES.reach[i],p.wReach),BONES.sip[i],p.wSip));\n  drawArm(arms.right,SHOULDER.right,p.wrist,p.angle,p.grip,fingerOffsets(R),-1,pole,bones);\n  rigHands.left=lw;rigHands.right=p.wrist;\n  const lift=clamp01((CUP_DESK.y-p.cup.y)/30);\n  coffeeCup.setAttribute('transform',`translate(${f2(p.cup.x)} ${f2(p.cup.y)}) rotate(${f2(p.cup.a)})`);\n  cupShadow.setAttribute('opacity',f2(1-lift));cupShadow.setAttribute('rx',f2(32-10*lift));cupSteam.setAttribute('opacity',f2(1-clamp01(lift*3)));\n}\nfunction drinkCoffee(){\n  if(drinking||resting)return;\n  const R=typers.right;drinkStart={x:R.px.x,y:R.py.x+R.dip.x,a:R.pa.x};\n  drinking=true;drinkTime=0;scene.classList.add('drinking');coffeeButton.disabled=true;restButton.disabled=true;updateDrinkButton();setCodingIntensity(intensity);\n}\nfunction finishDrink(){drinking=false;scene.classList.remove('drinking');coffeeButton.disabled=false;restButton.disabled=false;updateDrinkButton();setCodingIntensity(intensity)}\nwindow.drinkCoffee=drinkCoffee;window.drink=drinkCoffee;\n// 休息：双手停在键盘上不动，头顶飘 Zzz；喝东西时不能进入休息，休息时也不能喝\nconst restButton=document.querySelector('#dcl-rest');\nfunction setResting(on){resting=Boolean(on)&&!drinking;scene.classList.toggle('resting',resting);restButton.textContent=resting?'☀ 回来工作':'😴 休息一下';restButton.setAttribute('aria-pressed',String(resting));coffeeButton.disabled=resting||drinking;setCodingIntensity(intensity)}\nrestButton.addEventListener('click',()=>setResting(!resting));window.setResting=setResting;coffeeButton.addEventListener('click',drinkCoffee);\nconst lines=['// a little magic, one line at a time','import { dream } from \"midnight\";','','async function buildSomething() {','  const idea = await dream();','  return render(idea, {','    passion: Infinity,','    coffee: true,','    bugs: hopefullyZero','  });','}','','// compiling dreams…','await buildSomething();','✓ ready in 128ms'];\nconst wall=document.querySelector('#dcl-page-code-content'),wallSource=document.querySelector('#dcl-wall-source');\n// Public API: setCodeWallContent('code…') or setCodeWallContent(['line 1', 'line 2']).\n// Text is inserted with textContent, so pasted HTML is displayed without executing it.\nfunction setCodeWallContent(content){\n  const text=Array.isArray(content)?content.map(String).join('\\n'):String(content??'');\n  wallSource.value=text;\n  const source=text.replace(/\\r\\n?/g,'\\n').split('\\n'),wrapped=[];\n  for(const line of source){const expanded=line.replace(/\\t/g,'  ');if(!expanded.length)wrapped.push('');for(let i=0;i<expanded.length;i+=39)wrapped.push(expanded.slice(i,i+39));if(wrapped.length>=3000)break;}\n  const fragment=document.createDocumentFragment();\n  const columnCount=Math.max(2,Math.floor(innerWidth/310));\n  const rows=Math.max(30,Math.ceil(innerHeight/22.8)+8);\n  for(let column=0;column<columnCount;column++){\n    const block=document.createElement('pre');block.className='code-column';\n    for(let row=0;row<rows;row++){\n      const i=column*rows+row,line=document.createElement('span');\n      line.textContent=String(i+1).padStart(3,'0')+'  '+(wrapped.length?wrapped[i%wrapped.length]:'');block.append(line);\n    }\n    fragment.append(block);\n  }\n  wall.replaceChildren(fragment);\n  document.querySelector('#dcl-wall-feedback').textContent='已更新 · 代码已铺满页面背景';\n}\nwindow.setCodeWallContent=setCodeWallContent;\nlet wallResize;window.addEventListener('resize',()=>{clearTimeout(wallResize);wallResize=setTimeout(()=>setCodeWallContent(wallSource.value),120)});\ndocument.querySelector('#dcl-apply-wall').addEventListener('click',()=>setCodeWallContent(wallSource.value));\nsetCodeWallContent([...lines,'',...lines.map(l=>l.replace('dream','create').replace('midnight','studio')),'',...lines.map(l=>l.replace('dream','imagine').replace('midnight','tomorrow'))]);\ndocument.querySelector('#dcl-wall-feedback').textContent='';\n// Two identical code blocks make the scrolling boundary seamless.\nconst code=document.querySelector('#dcl-code'),codePeriod=lines.length*12;\n// 屏幕代码滚动开关：独立于「暂停动画」，停下时人物照常敲键盘，代码停在当前位置\nconst codeScrollButton=document.querySelector('#code-scroll');let codeScrolling=true;\nfunction setCodeScrolling(on){codeScrolling=Boolean(on);codeScrollButton.textContent=codeScrolling?'停止代码滚动':'恢复代码滚动';codeScrollButton.setAttribute('aria-pressed',String(!codeScrolling))}\ncodeScrollButton.addEventListener('click',()=>setCodeScrolling(!codeScrolling));window.setCodeScrolling=setCodeScrolling;\nfor(let block=0;block<2;block++)for(let i=0;i<lines.length;i++){\n  const y=215+(block*lines.length+i)*12;\n  for(const [x,color,text] of [[337,'#536f82',String(i+1).padStart(2,'0')],[359,i%4===0?'#9ce9cf':i%3===0?'#eab2ce':'#a4c4d9',lines[i]]]){\n    const node=document.createElementNS('http://www.w3.org/2000/svg','text');node.setAttribute('x',x);node.setAttribute('y',y);node.setAttribute('fill',color);node.textContent=text;code.append(node);\n  }\n}\n\nfunction resize(){const d=Math.min(devicePixelRatio||1,2),r=canvas.getBoundingClientRect();canvas.width=Math.round(r.width*d);canvas.height=Math.round(r.height*d);ctx.setTransform(canvas.width/1000,0,0,canvas.height/640,0,0)}new ResizeObserver(resize).observe(canvas);resize();\nfunction frame(t){if(STOP())return;const dt=Math.min((t-last)/1000,.04);last=t;if(!paused&&!document.hidden)updateRig(dt);ctx.clearRect(0,0,1000,640);if(!paused&&!document.hidden&&!reduced.matches){clock+=dt;if(codeScrolling&&!resting)codeClock=(codeClock+dt*(90+intensity*180))%codePeriod;code.setAttribute('transform',`translate(0,${-codeClock})`);const heat=drinking||resting?0:Math.max(0,(intensity-.7)/.3);emission+=dt*heat*65;while(emission>=1){emission--;const hand=Math.random()<.5?rigHands.left:rigHands.right;particles.push({x:hand.x+(Math.random()-.5)*28,y:hand.y+26,vx:(Math.random()-.5)*20,vy:24+Math.random()*24,age:0,life:1.5+Math.random()*1.4,r:5+Math.random()*6})}for(const p of particles){p.age+=dt;p.x+=p.vx*dt+Math.sin(clock*2+p.life)*dt*9;p.y-=p.vy*dt;p.r+=dt*11}particles=particles.filter(p=>p.age<p.life);}\nfor(const p of particles){const a=Math.sin(p.age/p.life*Math.PI)*.23;const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);g.addColorStop(0,`rgba(224,224,237,${a})`);g.addColorStop(.55,`rgba(195,202,220,${a*.65})`);g.addColorStop(1,'rgba(195,202,220,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(frame)}\nsetCodingIntensity(.4);updateRig(0);requestAnimationFrame(frame);\n",
    }

    /**
     * Settings the Host half injected into the page, read once at module load.
     * The schema defaults mirror these, so a page without the global still works.
     */
    const SETTINGS = (() => {
      const raw = globalThis.__DSH_CODE_LIVE_CONFIG__
      const height = raw === undefined || raw === null ? Number.NaN : Number(raw.sceneHeight)
      return {
        scene: !(raw !== undefined && raw !== null && raw.scene === false),
        sceneHeight: Number.isFinite(height) ? Math.min(280, Math.max(120, height)) : 168,
        character: raw !== undefined && raw !== null && raw.character === 'mint' ? 'mint' : 'maid',
        drink: raw !== undefined && raw !== null && raw.drink === 'tea' ? 'tea' : 'coffee',
      }
    })()

    /** The two file-mutation calls this panel follows. `apply_patch` is deliberately absent. */
    const FILE_TOOLS = { write: true, edit: true }
    /** Old (replaced) lines shown at most. */
    const MAX_OLD_LINES = 240
    /** New (streaming) lines shown at most. */
    const MAX_NEW_LINES = 400
    /** Context lines kept above and below the region. */
    const CONTEXT_BEFORE = 12
    const CONTEXT_AFTER = 8
    /** Lines requested per `workspaceFiles.read` page. */
    const PAGE_LIMIT = 2000
    /** File lines kept at most, so a huge file cannot stall the panel. */
    const MAX_FILE_LINES = 20000
    /** Pages read at most. */
    const MAX_PAGES = 40
    /** Above this many written lines the character's keyboard starts smoking. */
    const SMOKE_LINES = 200
    /** Idle spell between two coffees, taken from the demo's own drinking action. */
    const COFFEE_MS = 5 * 60 * 1000
    /** Idle spell before the character naps, using the demo's own rest state. */
    const REST_MS = 10 * 60 * 1000
    /** Complete-file lines rendered at most once a call settles. */
    const MAX_FILE_VIEW = 1500

    const zh = {
      tabTitle: '实时代码',
      guideTitle: '实时代码',
      guideDesc: '实时代码 LiveCode · 边生成边看代码变化（write / edit）',
      emptyTitle: '还没有文件改动',
      emptyHint: 'Agent 一改代码，这里就会先铺开原文件，再在改动处逐行演出替换过程。',
      emptyWaiting: '等待 write / edit 调用',
      stateStreaming: '生成中',
      statePending: '待执行',
      stateApplied: '已应用',
      stateReverted: '未生效',
      stateIdle: '空闲',
      loadingBase: '读取原文件…',
      baseFailed: '读取原文件失败',
      baseTruncated: '文件较长，只读取了前一部分；未找到替换区域时可能不准',
      closeTab: '关闭',
      sceneOn: '隐藏角色场景',
      sceneOff: '显示角色场景',
      settings: '场景设置',
      settingsTitle: '场景设置',
      sceneLabel: '显示场景',
      characterLabel: '人物',
      drinkLabel: '饮品',
      closeSettings: '收起设置',
      switchCharacter: '切换人物（大肥鱼 / 小绿）',
      charMaid: '大肥鱼',
      charMint: '小绿',
      switchDrink: '切换饮品（咖啡 / 茶）',
      drinkCoffee: '咖啡',
      drinkTea: '茶',
      tabMenu: '标签页操作',
      closeOthers: '关闭其他标签',
      closeAll: '关闭全部标签',
      closedTitle: '标签都已关闭',
      closedHint: '本次会话改过的文件还在，只是标签被收起来了。',
      showAll: '重新显示',
      omitted: '… 已省略',
      noRegion: '没有在原文里定位到 old_string，只显示正在生成的新内容',
      lines: '行',
      fileLoading: '读取文件…',
      fileFailed: '读取文件失败',
      fileTruncated: '文件较长，只显示前一部分',
    }

    const en = {
      tabTitle: 'LiveCode',
      guideTitle: 'LiveCode',
      guideDesc: 'LiveCode 实时代码 · watch a file change as it is written (write / edit)',
      emptyTitle: 'No file change yet',
      emptyHint: 'As soon as the agent edits a file, its original text appears here and the change is played out line by line.',
      emptyWaiting: 'Waiting for a write / edit call',
      stateStreaming: 'Streaming',
      statePending: 'Dispatching',
      stateApplied: 'Applied',
      stateReverted: 'Not applied',
      stateIdle: 'Idle',
      loadingBase: 'Reading the original…',
      baseFailed: 'Could not read the original file',
      baseTruncated: 'The file is long and only its first part was read; a missing region may be wrong',
      closeTab: 'Close',
      sceneOn: 'Hide the typing scene',
      sceneOff: 'Show the typing scene',
      settings: 'Scene settings',
      settingsTitle: 'Scene settings',
      sceneLabel: 'Show the scene',
      characterLabel: 'Character',
      drinkLabel: 'Drink',
      closeSettings: 'Close settings',
      switchCharacter: 'Switch character (Dafeiyu / Xiaolü)',
      charMaid: 'Dafeiyu',
      charMint: 'Xiaolü',
      switchDrink: 'Switch drink (coffee / tea)',
      drinkCoffee: 'Coffee',
      drinkTea: 'Tea',
      tabMenu: 'Tab actions',
      closeOthers: 'Close other tabs',
      closeAll: 'Close all tabs',
      closedTitle: 'All tabs closed',
      closedHint: 'The files this Session touched are still tracked; only their chips are hidden.',
      showAll: 'Show them again',
      omitted: '… omitted',
      noRegion: 'old_string was not found in the original, so only the generated text is shown',
      lines: 'lines',
      fileLoading: 'Reading the file…',
      fileFailed: 'Could not read the file',
      fileTruncated: 'The file is long and only its first part is shown',
    }

    const CSS = `
.dcl-root {
  position: relative; display: flex; flex-direction: column; height: 100%; min-height: 0;
  color: var(--dsw-alias-label-primary); font-size: 12px; background: var(--dsw-alias-bg-base);
  --dcl-syn-key: var(--dsw-alias-link, var(--dsw-alias-brand-primary));
  --dcl-syn-fn: color-mix(in srgb, var(--dcl-syn-key) 58%, var(--dsw-alias-state-error-primary));
  --dcl-syn-type: color-mix(in srgb, var(--dsw-alias-state-success-primary) 46%, var(--dcl-syn-key));
  --dcl-syn-const: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 62%, var(--dsw-alias-state-error-primary));
  --dcl-syn-prop: color-mix(in srgb, var(--dcl-syn-key) 34%, var(--dsw-alias-label-secondary));
  --dcl-syn-builtin: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 30%, var(--dcl-syn-key));
  --dcl-syn-string: var(--dsw-alias-state-success-primary);
  --dcl-syn-number: var(--dsw-alias-state-warn-primary);
  --dcl-syn-comment: var(--dsw-alias-label-secondary);
  --dcl-syn-op: color-mix(in srgb, var(--dsw-alias-label-secondary) 78%, var(--dsw-alias-label-primary));
  --dcl-syn-punct: var(--dsw-alias-label-secondary);
}
.dcl-head { flex: none; display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dcl-kind { flex: none; font-size: 10px; font-weight: 500; letter-spacing: .05em; text-transform: uppercase; line-height: 16px; padding: 1px 6px; border-radius: 6px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-2); }
.dcl-kind:empty { display: none; }
.dcl-path { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; font-weight: 500; color: var(--dsw-alias-label-primary); }
.dcl-title { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-secondary); }
.dcl-tabs { flex: none; display: flex; gap: 4px; padding: 6px 8px; overflow-x: auto; border-bottom: 1px solid var(--dsw-alias-border-l1); scrollbar-width: thin; }
.dcl-tab { display: inline-flex; align-items: center; gap: 5px; flex: none; max-width: 190px; padding: 3px 8px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: var(--dsw-alias-label-secondary); font: inherit; font-size: 11.5px; line-height: 17px; cursor: pointer; }
.dcl-tab:hover { background: var(--dsw-alias-bg-layer-2); }
.dcl-tabbar { flex: none; position: relative; display: flex; align-items: center; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dcl-tabbar .dcl-tabs { flex: 1 1 auto; min-width: 0; border-bottom: 0; }
.dcl-menu { position: absolute; z-index: 20; min-width: 140px; padding: 4px; border-radius: 10px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-overlay); box-shadow: 0 8px 24px color-mix(in srgb, var(--dsw-alias-label-primary) 16%, transparent); }
.dcl-menu-item { display: block; width: 100%; padding: 6px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--dsw-alias-label-primary); font: inherit; font-size: 12px; line-height: 18px; text-align: left; cursor: pointer; }
.dcl-menu-item:hover { background: var(--dsw-alias-bg-layer-2); }
.dcl-empty-action { margin-top: 6px; padding: 4px 12px; border-radius: 8px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); font: inherit; font-size: 12px; line-height: 18px; cursor: pointer; }
.dcl-empty-action:hover { border-color: var(--dsw-alias-link, var(--dsw-alias-border-l2)); }
.dcl-tab.is-active { color: var(--dsw-alias-label-primary); font-weight: 500; border-color: var(--dsw-alias-link, var(--dsw-alias-border-l2)); background: color-mix(in srgb, var(--dsw-alias-link, var(--dsw-alias-brand-primary)) 16%, transparent); }
.dcl-tab-x { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; padding: 0; border: 0; border-radius: 4px; background: transparent; color: inherit; opacity: .55; font: inherit; line-height: 1; cursor: pointer; }
.dcl-tab-x:hover { opacity: 1; background: color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent); }
.dcl-tab-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dcl-tab-dot { flex: none; width: 6px; height: 6px; border-radius: 50%; background: var(--dsw-alias-state-idle-primary); }
.dcl-tab-dot.is-streaming { background: var(--dsw-alias-state-warn-primary); animation: dcl-pulse 1.1s ease-in-out infinite; }
.dcl-tab-dot.is-pending { background: var(--dsw-alias-state-idle-primary); }
.dcl-tab-dot.is-applied { background: var(--dsw-alias-state-success-primary); }
.dcl-tab-dot.is-reverted { background: var(--dsw-alias-state-error-primary); }
.dcl-settings-wrap { position: relative; flex: none; display: flex; align-items: center; }
.dcl-gear { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 20px; padding: 0; border: 0; border-radius: 6px; background: transparent; color: var(--dsw-alias-label-secondary); cursor: pointer; }
.dcl-gear:hover, .dcl-gear[aria-expanded='true'] { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-2); }
.dcl-settings { position: absolute; top: 26px; right: 0; z-index: 30; width: 188px; padding: 8px; border-radius: 10px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-overlay); box-shadow: 0 10px 28px color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent); }
.dcl-settings-title { padding: 2px 4px 6px; margin-bottom: 4px; border-bottom: 1px solid var(--dsw-alias-border-l1); font-size: 11px; color: var(--dsw-alias-label-secondary); }
.dcl-settings-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 4px; }
.dcl-settings-label { font-size: 11.5px; color: var(--dsw-alias-label-secondary); }
.dcl-seg { display: inline-flex; padding: 1px; border-radius: 7px; background: var(--dsw-alias-bg-layer-2); }
.dcl-seg-btn { border: 0; border-radius: 6px; padding: 2px 8px; background: transparent; color: var(--dsw-alias-label-secondary); font: inherit; font-size: 11px; line-height: 16px; cursor: pointer; }
.dcl-seg-btn:hover { color: var(--dsw-alias-label-primary); }
.dcl-seg-btn.is-icon { display: inline-flex; align-items: center; justify-content: center; padding: 3px 8px; color: var(--dsw-alias-label-secondary); }
.dcl-seg-btn.is-emoji { padding: 1px 8px; font-size: 12px; line-height: 18px; }
.dcl-seg-btn.is-icon svg { display: block; }
.dcl-seg-btn.is-on { background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-primary); box-shadow: 0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary) 16%, transparent); }
.dcl-pill { flex: none; display: inline-flex; align-items: center; gap: 5px; font-size: 11px; line-height: 16px; padding: 1px 8px; border-radius: 999px; border: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); }
.dcl-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.dcl-pill.is-streaming { color: var(--dsw-alias-state-warn-primary); border-color: var(--dsw-alias-state-warn-primary); }
.dcl-pill.is-streaming .dcl-dot { animation: dcl-pulse 1.1s ease-in-out infinite; }
.dcl-pill.is-pending { color: var(--dsw-alias-state-idle-primary); border-color: var(--dsw-alias-border-l2); }
.dcl-pill.is-applied { color: var(--dsw-alias-state-success-primary); border-color: var(--dsw-alias-state-success-primary); }
.dcl-pill.is-reverted { color: var(--dsw-alias-state-error-primary); border-color: var(--dsw-alias-state-error-primary); }
.dcl-body { flex: 1 1 auto; min-height: 0; overflow: auto; padding: 6px 0 48px; scrollbar-width: thin; }
.dcl-scene { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: min(440px, 100%); height: var(--dcl-scene-height, 168px); pointer-events: none; overflow: hidden; background: transparent; border: 0; box-shadow: none; -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 26%); mask-image: linear-gradient(to bottom, transparent 0, #000 26%); }
.dcl-root .dcl-scene .scene { position: absolute; inset: 0; aspect-ratio: auto; max-height: none; border: 0; border-radius: 0; background: transparent; }
.dcl-root .dcl-scene .scene .screen-glow { opacity: 0; }
.dcl-root .dcl-scene .scene.berserk .screen-glow { opacity: .45; }
.dcl-root .dcl-scene .scene canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.dcl-scene-stubs { display: none; }
.dcl-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; min-height: 100%; padding: 40px 24px; text-align: center; }
.dcl-empty-art { color: var(--dsw-alias-label-secondary); display: flex; padding: 10px; border-radius: 16px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); }
.dcl-empty-title { font-size: 13px; font-weight: 500; color: var(--dsw-alias-label-primary); }
.dcl-empty-hint { max-width: 260px; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-secondary); }
.dcl-empty-wait { display: inline-flex; align-items: center; gap: 6px; margin-top: 4px; padding: 3px 10px; border-radius: 999px; border: 1px solid var(--dsw-alias-border-l1); font-size: 11px; line-height: 16px; color: var(--dsw-alias-label-secondary); }
.dcl-empty-wait .dcl-dot { background: var(--dsw-alias-state-warn-primary); animation: dcl-pulse 1.6s ease-in-out infinite; }
.dcl-warning { margin: 8px 12px; padding: 8px 10px; border-radius: 8px; font-size: 11px; line-height: 16px; color: var(--dsw-alias-state-error-primary); border: 1px solid var(--dsw-alias-state-error-primary); }
.dcl-hint { margin: 8px 12px; padding: 8px 10px; border-radius: 8px; font-size: 11px; line-height: 16px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-2); }
.dcl-row { display: flex; align-items: baseline; gap: 2px; padding: 0 8px 0 0; }
.dcl-ln { flex: none; width: 24px; margin-right: 9px; text-align: right; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 10px; line-height: 21px; font-variant-numeric: tabular-nums; color: var(--dsw-alias-state-idle-primary); -webkit-user-select: none; user-select: none; }
.dcl-code { flex: 1 1 auto; min-width: 0; font-family: ui-monospace, SFMono-Regular, Menlo, 'SF Mono', Consolas, 'Liberation Mono', monospace; font-size: 12.5px; line-height: 21px; tab-size: 4; white-space: pre-wrap; word-break: break-word; -webkit-font-smoothing: antialiased; }
.dcl-tk-k { color: var(--dcl-syn-key); font-weight: 500; }
.dcl-tk-f { color: var(--dcl-syn-fn); }
.dcl-tk-t { color: var(--dcl-syn-type); }
.dcl-tk-cst { color: var(--dcl-syn-const); }
.dcl-tk-bl { color: var(--dcl-syn-builtin); }
.dcl-tk-pr { color: var(--dcl-syn-prop); }
.dcl-tk-s { color: var(--dcl-syn-string); }
.dcl-tk-n { color: var(--dcl-syn-number); }
.dcl-tk-c { color: var(--dcl-syn-comment); font-style: italic; }
.dcl-tk-o { color: var(--dcl-syn-op); }
.dcl-tk-p { color: var(--dcl-syn-punct); opacity: .85; }
.dcl-bar { flex: none; width: 2px; align-self: stretch; border-radius: 1px; background: transparent; }
.dcl-row.is-changed .dcl-bar.is-on, .dcl-bar.is-on { background: var(--dsw-alias-state-success-primary); }
.dcl-row.is-changed { background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 8%, transparent); }

.dcl-overlay { margin: 6px 4px 6px 0; padding: 4px 0; border-radius: 10px; border: 1px solid var(--dsw-alias-state-warn-primary); background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 7%, transparent); overflow: hidden; }
.dcl-overlay.is-live { border-color: var(--dsw-alias-state-success-primary); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 6%, transparent); }
.dcl-overlay.is-delete { border-color: var(--dsw-alias-state-error-primary); background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent); }
.dcl-overlay.is-delete .dcl-oldset { background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); }
.dcl-overlay.is-delete .dcl-oldset { opacity: .55; }
.dcl-overlay .dcl-row { padding: 0 4px 0 0; }
.dcl-oldset { background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 10%, transparent); }
.dcl-oldset .dcl-row { opacity: .68; }
.dcl-newset { background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent); }
.dcl-collapse { display: grid; grid-template-rows: 1fr; padding: 0 8px; transition: grid-template-rows .34s ease, opacity .28s ease; }
.dcl-collapse.is-gone { grid-template-rows: 0fr; opacity: 0; }
.dcl-row.is-new { animation: dcl-line-in .26s ease both; }
.dcl-caret { display: inline-block; width: 6px; height: 13px; margin-left: 2px; vertical-align: -2px; background: var(--dsw-alias-state-success-primary); animation: dcl-blink 1s steps(1) infinite; }
.dcl-omitted { padding: 2px 8px 2px 39px; font-size: 11px; line-height: 18px; color: var(--dsw-alias-label-secondary); font-style: italic; }
@keyframes dcl-line-in { from { opacity: 0; transform: translateY(-2px); } to { opacity: 1; transform: none; } }
@keyframes dcl-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
@keyframes dcl-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .dcl-row.is-new { animation: none; }
  .dcl-pill.is-streaming .dcl-dot { animation: none; }
  .dcl-tab-dot.is-streaming { animation: none; }
  .dcl-caret { animation: none; display: none; }
  .dcl-collapse { transition: none; }
}
`

    /** Component-owned stylesheet, so unmounting the panel takes it with it. */
    function Style() {
      return h('style', { 'data-dsh-code-live': 'styles' }, CSS)
    }

    /** The guide capsule's glyph and the tab type's mark. */
    function StreamGlyph(props) {
      const size = (props && props.size) || 16
      return h('svg', {
        viewBox: '0 0 16 16', width: size, height: size, fill: 'none',
        'aria-hidden': true, style: { display: 'block' },
      },
      h('path', { d: 'M5.4 3.6 2 8l3.4 4.4', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('path', { d: 'M10.6 3.6 14 8l-3.4 4.4', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('path', { d: 'M9 3.4 7 12.6', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' }),
      h('circle', { cx: 12.4, cy: 3.6, r: 1.6, fill: 'currentColor' }))
    }

    /** The header's settings button: three sliders, drawn from the theme's current colour. */
    function GearIcon() {
      return h('svg', { viewBox: '0 0 16 16', width: 14, height: 14, fill: 'none', 'aria-hidden': true },
        h('path', { d: 'M2.5 4.5h11M2.5 8h11M2.5 11.5h11', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round' }),
        h('circle', { cx: 6, cy: 4.5, r: 1.7, fill: 'var(--dsw-alias-bg-base)', stroke: 'currentColor', strokeWidth: 1.2 }),
        h('circle', { cx: 10.5, cy: 8, r: 1.7, fill: 'var(--dsw-alias-bg-base)', stroke: 'currentColor', strokeWidth: 1.2 }),
        h('circle', { cx: 5, cy: 11.5, r: 1.7, fill: 'var(--dsw-alias-bg-base)', stroke: 'currentColor', strokeWidth: 1.2 }))
    }

    /** The scene row's two states: an open eye, or the same eye struck through. */
    function EyeGlyph(props) {
      return h('svg', { viewBox: '0 0 16 16', width: 13, height: 13, fill: 'none', 'aria-hidden': true },
        h('path', { d: 'M1.6 8S4 3.9 8 3.9 14.4 8 14.4 8 12 12.1 8 12.1 1.6 8 1.6 8Z', stroke: 'currentColor', strokeWidth: 1.3, strokeLinejoin: 'round' }),
        h('circle', { cx: 8, cy: 8, r: 2.1, stroke: 'currentColor', strokeWidth: 1.3 }),
        props.off === true
          ? h('path', { d: 'M2.4 13.6 13.6 2.4', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' })
          : null)
    }

    /** The empty state's mark: a code frame with a change bar and a cursor line. */
    function EmptyArt() {
      return h('svg', { viewBox: '0 0 64 64', width: 56, height: 56, fill: 'none', 'aria-hidden': true },
        h('rect', { x: 5, y: 9, width: 54, height: 46, rx: 11, stroke: 'currentColor', strokeOpacity: 0.28, strokeWidth: 1.5 }),
        h('path', { d: 'M5 20h54', stroke: 'currentColor', strokeOpacity: 0.2, strokeWidth: 1.5 }),
        h('circle', { cx: 13, cy: 14.5, r: 1.7, fill: 'currentColor', fillOpacity: 0.3 }),
        h('circle', { cx: 19, cy: 14.5, r: 1.7, fill: 'currentColor', fillOpacity: 0.18 }),
        h('rect', { x: 13, y: 29, width: 3, height: 11, rx: 1.5, fill: 'var(--dsw-alias-state-success-primary)' }),
        h('rect', { x: 21, y: 30, width: 21, height: 3, rx: 1.5, fill: 'currentColor', fillOpacity: 0.34 }),
        h('rect', { x: 21, y: 36.5, width: 27, height: 3, rx: 1.5, fill: 'currentColor', fillOpacity: 0.2 }),
        h('rect', { x: 13, y: 44, width: 3, height: 3, rx: 1.5, fill: 'var(--dsw-alias-state-warn-primary)' }),
        h('rect', { x: 21, y: 44, width: 15, height: 3, rx: 1.5, fill: 'currentColor', fillOpacity: 0.16 }))
    }

    /**
     * The scene lifted from the anime-coding demo: a mint twin-tailed character
     * seen from behind, desk, monitor and keyboard, all driven by that demo's own
     * rig. The rig runs once per mount and each mount owns its stop flag, so a
     * closed panel takes its animation loop with it.
     */
    function SceneFigure(props) {
      const hostRef = useRef(null)

      useEffect(() => {
        const host = hostRef.current
        if (host === null) return undefined
        let stopped = false
        host.innerHTML = SCENE.html
        const style = document.createElement('style')
        style.textContent = SCENE.css
        host.appendChild(style)
        try {
          // The demo scrolls the screen code all the time; here it moves only while
          // a call is writing, so an idle screen sits still.
          let rigSource = SCENE.rig.replace(
            'codeClock=(codeClock+dt*(90+intensity*180))%codePeriod;',
            "if(!scene.classList.contains('screen-idle'))codeClock=(codeClock+dt*(90+intensity*180))%codePeriod;",
          )
          if (rigSource === SCENE.rig) console.warn('[dsh-code-live] screen-scroll patch did not apply')
          const run = new Function('STOP', rigSource)
          run(() => stopped)
        } catch (error) {
          console.error('[dsh-code-live] scene rig', error)
        }
        try { window.setCodingIntensity(0.15) } catch (error) { console.error('[dsh-code-live] scene', error) }
        return () => {
          stopped = true
          try { window.setCodingIntensity(0) } catch (error) { console.error('[dsh-code-live] scene', error) }
          host.innerHTML = ''
        }
      }, [])

      // While the arguments stream the character types flat out; otherwise idles.
      useEffect(() => {
        const intensity = props.smoking === true ? 1 : props.active === true ? 0.95 : 0.15
        try { window.setCodingIntensity(intensity) } catch (error) { console.error('[dsh-code-live] scene', error) }
      }, [props.active, props.smoking])

      // Screen code scrolls only while a call is writing; idle leaves it parked.
      useEffect(() => {
        const host = hostRef.current
        if (host === null) return
        const scene = host.querySelector('#dcl-scene')
        if (scene === null) return
        scene.classList.toggle('screen-idle', props.active !== true)
      }, [props.active])

      // Past SMOKE_LINES the rig burns its keyboard: the smoke system reads this class.
      useEffect(() => {
        const host = hostRef.current
        if (host === null) return
        const scene = host.querySelector('#dcl-scene')
        if (scene === null) return
        scene.classList.toggle('smoking', props.smoking === true)
      }, [props.smoking])

      // The rig exposes its own character switch: 'maid' (大肥鱼) or 'mint' (小绿).
      useEffect(() => {
        try { window.setCharacter(props.character) } catch (error) { console.error('[dsh-code-live] character', error) }
      }, [props.character])

      // And its own drink switch: 'coffee' or 'tea' (same mug outline, different art).
      useEffect(() => {
        try { window.setDrink(props.drink) } catch (error) { console.error('[dsh-code-live] drink', error) }
      }, [props.drink])

      // Idle for COFFEE_MS and she reaches for the mug; writing restarts the clock.
      useEffect(() => {
        if (props.active === true) return undefined
        let timer = 0
        const schedule = () => {
          timer = setTimeout(() => {
            try { window.drinkCoffee() } catch (error) { console.error('[dsh-code-live] coffee', error) }
            schedule()
          }, COFFEE_MS)
        }
        schedule()
        return () => clearTimeout(timer)
      }, [props.active])

      // Ten idle minutes and she naps, the way the demo's own rest button does it;
      // writing wakes her. A drink in progress defers the nap, so it retries.
      useEffect(() => {
        if (props.active === true) {
          try { window.setResting(false) } catch (error) { console.error('[dsh-code-live] rest', error) }
          return undefined
        }
        let retry = 0
        const start = setTimeout(() => {
          const tryRest = () => {
            const host = hostRef.current
            const scene = host === null ? null : host.querySelector('#dcl-scene')
            if (scene !== null && scene.classList.contains('resting')) {
              clearInterval(retry)
              return
            }
            try { window.setResting(true) } catch (error) { console.error('[dsh-code-live] rest', error) }
          }
          tryRest()
          retry = setInterval(tryRest, 20000)
        }, REST_MS)
        return () => {
          clearTimeout(start)
          clearInterval(retry)
        }
      }, [props.active])

      return h('div', { className: 'dcl-scene', ref: hostRef, 'aria-hidden': true })
    }

    /** Whether a call block is one of the file mutations this panel follows. */
    function isFileCall(call) {
      return !!call && FILE_TOOLS[call.name] === true
    }

    /** The recorded `file_path` argument so far, or the empty string. */
    function pathOf(call) {
      return textOf(call, 'file_path')
    }

    /** One text argument so far, or the empty string. */
    function textOf(call, key) {
      const args = call && call.args
      if (!args || typeof args.text !== 'function') return ''
      const value = args.text(key)
      return typeof value === 'string' ? value : ''
    }

    /**
     * Whether a string argument has closed, so a region search cannot lock onto a
     * half-streamed fragment. A dispatched call counts as closed.
     * @param call - the call block.
     * @param key - the argument name.
     * @returns whether the value is final enough to search for.
     */
    function settledArg(call, key) {
      const args = call && call.args
      if (!args || typeof args.complete !== 'function') return true
      if (args.complete(key)) return true
      return call.phase === 'start' || call.kind === 'tool-result'
    }

    /**
     * Every file this Session touched, one entry per path, holding that path's
     * newest call. Entries keep the order a file was first touched in, so a tab
     * does not jump around when the same file is edited again.
     * @param running - the live calls.
     * @param nodes - the settled timeline nodes.
     * @returns the file entries, oldest first touch first.
     */
    function collectFiles(running, nodes) {
      const files = new Map()
      const add = (call, settled, time) => {
        if (!isFileCall(call)) return
        const path = pathOf(call)
        if (path === '') return
        const previous = files.get(path)
        if (previous === undefined) {
          files.set(path, { path, call, settled, time, firstTime: time })
          return
        }
        if (time >= previous.time) files.set(path, { ...previous, call, settled, time })
      }
      for (const call of running || []) add(call, false, call.time || 0)
      for (const node of nodes || []) {
        if (!node || node.kind !== 'tool-result') continue
        add(node, true, node.time || 0)
      }
      return [...files.values()].sort((a, b) => a.firstTime - b.firstTime)
    }

    /** The last path segment, for a tab label. */
    function basenameOf(path) {
      const at = path.lastIndexOf('/')
      return at === -1 ? path : path.slice(at + 1)
    }

    /** The lifecycle stage one entry is in, shared by the pill and a tab dot. */
    function stageOf(file) {
      if (file.settled) return file.call.isError === true ? 'reverted' : 'applied'
      return file.call.phase === 'start' ? 'pending' : 'streaming'
    }

    /** Where `oldText` starts inside the file, and how many lines it spans. */
    function locateRegion(lines, oldText) {
      if (!oldText) return null
      const joined = lines.join('\n')
      const at = joined.indexOf(oldText)
      if (at < 0) return null
      const before = joined.slice(0, at)
      return { start: before.split('\n').length - 1, count: oldText.split('\n').length }
    }

    /**
     * Line rows for the settled file: every line of the current text, the lines
     * that differ from the pre-edit text marked, and one marker row per run of
     * lines the edit removed — the shape of a diff over the whole file.
     * @param before - the pre-edit lines.
     * @param after - the current lines.
     * @returns the display rows and how many lines changed.
     */
    function diffRows(before, after) {
      const rows = []
      let changed = 0
      let prefix = 0
      const shortest = Math.min(before.length, after.length)
      while (prefix < shortest && before[prefix] === after[prefix]) prefix++
      let suffix = 0
      while (suffix < shortest - prefix && before[before.length - 1 - suffix] === after[after.length - 1 - suffix]) suffix++
      const oldMid = before.slice(prefix, before.length - suffix)
      const newMid = after.slice(prefix, after.length - suffix)
      for (let i = 0; i < prefix; i++) rows.push({ no: i + 1, text: after[i], changed: false })
      const pushDeleted = count => {
        if (count <= 0) return
        rows.push({ deleted: count })
        changed += count
      }
      if (oldMid.length * newMid.length > 250000) {
        // Too large to align line by line: report the middle as replaced.
        pushDeleted(oldMid.length)
        for (let j = 0; j < newMid.length; j++) rows.push({ no: prefix + j + 1, text: newMid[j], changed: true })
        changed += newMid.length
      } else {
        const n = oldMid.length
        const m = newMid.length
        const dp = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1))
        for (let i = n - 1; i >= 0; i--) {
          for (let j = m - 1; j >= 0; j--) {
            dp[i][j] = oldMid[i] === newMid[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
          }
        }
        let i = 0
        let j = 0
        let pending = 0
        const flush = () => {
          pushDeleted(pending)
          pending = 0
        }
        while (i < n || j < m) {
          if (i < n && j < m && oldMid[i] === newMid[j]) {
            flush()
            rows.push({ no: prefix + j + 1, text: newMid[j], changed: false })
            i++
            j++
          } else if (j < m && (i >= n || dp[i][j + 1] >= dp[i + 1][j])) {
            flush()
            rows.push({ no: prefix + j + 1, text: newMid[j], changed: true })
            changed++
            j++
          } else {
            pending++
            i++
          }
        }
        flush()
      }
      for (let k = 0; k < suffix; k++) {
        const index = after.length - suffix + k
        rows.push({ no: index + 1, text: after[index], changed: false })
      }
      return { rows, changed }
    }

    /** Split streamed text into display lines. */
    function linesOf(text) {
      if (!text) return []
      const lines = text.split('\n')
      if (lines.length > 1 && lines[lines.length - 1] === '') lines.pop()
      return lines
    }

    /**
     * Words tinted as keywords. One merged list covers the languages a coding
     * agent writes here; a word that is a keyword somewhere is tinted, which is
     * a reading aid rather than a parser.
     */
    const KEYWORD_SET = new Set(('const let var function return if else for while do switch case default break continue '
      + 'new class extends super this import export from as async await try catch finally throw typeof instanceof in of '
      + 'delete void yield static get set null undefined true false NaN Infinity None True False and or not is lambda def '
      + 'pass raise with elif global nonlocal assert del interface type enum implements public private protected readonly '
      + 'declare namespace abstract final throws synchronized volatile transient native strict structure package')
      .split(' '))

    /** Single characters tinted as punctuation. */
    /** Lowercase type keywords, tinted as a type rather than as a statement keyword. */
    const TYPE_WORDS = new Set('string number boolean any unknown never void object symbol bigint'.split(' '))

    /** Ambient globals a reader recognises as builtins rather than as local names. */
    const BUILTIN_WORDS = new Set(('console document window process globalThis require module exports Math JSON Promise '
      + 'Date Error RegExp Symbol Array Object String Number Boolean Map Set WeakMap WeakSet Reflect Proxy Intl parseInt '
      + 'parseFloat isNaN setTimeout setInterval clearTimeout fetch').split(' '))

    const PUNCTUATION = new Set('{}()[];,'.split(''))
    const OPERATORS = new Set('.:=+-*/%<>!&|?~^'.split(''))

    /** The previous significant character before `at`, or the empty string. */
    function charBefore(text, at) {
      for (let i = at - 1; i >= 0; i--) {
        const ch = text[i]
        if (ch !== ' ' && ch !== '\t' && ch !== '\r' && ch !== '\n') return ch
      }
      return ''
    }

    /** Recent highlighted slices, so a re-render during streaming reuses them. */
    const HIGHLIGHT_CACHE = new Map()

    /**
     * Tint one text into lines of cells. Block comments and template strings
     * cross line boundaries, which is why this scans the text rather than a line.
     * @param text - the slice to tint.
     * @returns one cell array per line; a cell is `{ t }` or `{ t, c }` with a class suffix.
     */
    function highlight(text) {
      const lines = [[]]
      const emit = (str, cls) => {
        if (str === '') return
        const parts = str.split('\n')
        for (let k = 0; k < parts.length; k++) {
          if (k > 0) lines.push([])
          if (parts[k] !== '') lines[lines.length - 1].push(cls === undefined ? { t: parts[k] } : { t: parts[k], c: cls })
        }
      }
      const n = text.length
      let i = 0
      let lineStart = 0
      while (i < n) {
        const ch = text[i]
        if (ch === '\n') {
          lines.push([])
          i++
          lineStart = i
          continue
        }
        if (ch === ' ' || ch === '\t' || ch === '\r') {
          const start = i
          while (i < n && (text[i] === ' ' || text[i] === '\t' || text[i] === '\r')) i++
          emit(text.slice(start, i))
          continue
        }
        if (ch === '/' && text[i + 1] === '/') {
          const end = text.indexOf('\n', i)
          emit(text.slice(i, end === -1 ? n : end), 'c')
          i = end === -1 ? n : end
          continue
        }
        if (ch === '/' && text[i + 1] === '*') {
          const close = text.indexOf('*/', i + 2)
          const end = close === -1 ? n : close + 2
          emit(text.slice(i, end), 'c')
          i = end
          continue
        }
        if (ch === '#' && /^[ \t]*$/.test(text.slice(lineStart, i))) {
          const end = text.indexOf('\n', i)
          emit(text.slice(i, end === -1 ? n : end), 'c')
          i = end === -1 ? n : end
          continue
        }
        if (ch === '"' || ch === "'") {
          let j = i + 1
          while (j < n && text[j] !== ch && text[j] !== '\n') j += text[j] === '\\' ? 2 : 1
          if (j < n && text[j] === ch) j++
          emit(text.slice(i, Math.min(j, n)), 's')
          i = Math.min(j, n)
          continue
        }
        if (ch === '`') {
          let j = i + 1
          while (j < n) {
            if (text[j] === '\\') { j += 2; continue }
            if (text[j] === '`') { j++; break }
            j++
          }
          emit(text.slice(i, Math.min(j, n)), 's')
          i = Math.min(j, n)
          continue
        }
        if (ch >= '0' && ch <= '9') {
          let j = i + 1
          while (j < n && /[0-9a-fA-FxXoObBn._]/.test(text[j])) j++
          emit(text.slice(i, j), 'n')
          i = j
          continue
        }
        if (/[A-Za-z_$]/.test(ch)) {
          let j = i + 1
          while (j < n && /[A-Za-z0-9_$]/.test(text[j])) j++
          const word = text.slice(i, j)
          let cls
          if (TYPE_WORDS.has(word)) cls = 't'
          else if (BUILTIN_WORDS.has(word)) cls = 'bl'
          else if (KEYWORD_SET.has(word)) cls = 'k'
          else if (/^[A-Z][A-Z0-9_]*$/.test(word) && word.length > 1) cls = 'cst'
          else if (/^[A-Z]/.test(word)) cls = 't'
          else if (text[j] === '(') cls = 'f'
          else if (charBefore(text, i) === '.') cls = 'pr'
          else if (text[j] === ':' && text[j + 1] !== ':') cls = 'pr'
          emit(word, cls)
          i = j
          continue
        }
        if (PUNCTUATION.has(ch)) {
          emit(ch, 'p')
          i++
          continue
        }
        if (OPERATORS.has(ch)) {
          emit(ch, 'o')
          i++
          continue
        }
        emit(ch)
        i++
      }
      return lines
    }

    /**
     * Tint one slice of a line array, reusing a recent result for the same text.
     * @param lines - the full line array.
     * @param from - first line index.
     * @param count - how many lines.
     * @returns one cell array per displayed line.
     */
    function highlightSlice(lines, from, count) {
      if (count <= 0) return []
      const text = lines.slice(from, from + count).join('\n')
      const hit = HIGHLIGHT_CACHE.get(text)
      if (hit !== undefined) return hit
      const result = highlight(text)
      if (HIGHLIGHT_CACHE.size >= 16) HIGHLIGHT_CACHE.clear()
      HIGHLIGHT_CACHE.set(text, result)
      return result
    }

    /**
     * One line row, tinted from its cells. `bar` draws the changed-line marker
     * in the left gutter, the way a diff marks a line it touched.
     */
    function Row(props) {
      const { number, text, cells, kind, delay, caret, bar, anchor } = props
      const content = cells === undefined
        ? (text === '' ? '\u00a0' : text)
        : cells.length === 0
          ? '\u00a0'
          : cells.map((cell, index) => cell.c === undefined
            ? cell.t
            : h('span', { key: 't' + String(index), className: 'dcl-tk-' + cell.c }, cell.t))
      const className = kind === 'new' ? 'dcl-row is-new'
        : kind === 'changed' ? 'dcl-row is-changed'
          : 'dcl-row'
      return h('div', {
        className,
        'data-dcl-anchor': anchor === true ? '' : undefined,
        style: delay === undefined ? undefined : { animationDelay: delay + 'ms' },
      },
      h('span', { className: 'dcl-bar' + (bar === true ? ' is-on' : '') }),
      h('span', { className: 'dcl-ln' }, number === null || number === undefined ? '' : String(number)),
      h('span', { className: 'dcl-code' }, content, caret ? h('span', { className: 'dcl-caret' }) : null))
    }

    /** A short italic row standing in for omitted lines. */
    function Omitted(props) {
      return h('div', { className: 'dcl-omitted' }, props.t('omitted') + ' ' + String(props.count) + ' ' + props.t('lines'))
    }

    /**
     * One mounted panel: the files this Session touched, the active file's
     * pre-edit text, the arguments streaming right now, and — once a call
     * settles — the complete file with its changed lines marked.
     */
    function CodeLiveTab(props) {
      const { useChat, t, readFile } = props
      const sessionId = props.sessionId
      const running = useChat(snapshot => snapshot.legacy.runningCalls)
      const nodes = useChat(snapshot => snapshot.legacy.nodes)
      const files = useMemo(() => collectFiles(running, nodes), [running, nodes])

      // A closed chip hides that exact call; a later call on the same file opens it again.
      const [closed, setClosed] = useState(() => new Map())
      const visible = files.filter(file => closed.get(file.path) !== file.call.callId)
      const latest = visible.reduce((best, file) => (best === null || file.time >= best.time ? file : best), null)

      // A clicked chip holds until the next call starts, then the panel follows again.
      const [pickedPath, setPickedPath] = useState('')
      const latestCallId = latest === null ? '' : latest.call.callId
      const followedRef = useRef('')
      useEffect(() => {
        if (latestCallId === followedRef.current) return
        followedRef.current = latestCallId
        setPickedPath('')
      }, [latestCallId])

      const activePath = pickedPath !== '' && visible.some(file => file.path === pickedPath)
        ? pickedPath
        : (latest === null ? '' : latest.path)
      const entry = visible.find(file => file.path === activePath) || null

      const callId = entry ? entry.call.callId : ''
      const toolName = entry ? entry.call.name : ''
      const filePath = entry ? entry.path : ''
      const settled = entry ? entry.settled : false
      const failed = settled && entry.call.isError === true

      const cacheRef = useRef(new Map())
      const seenRunningRef = useRef(new Set())
      const [base, setBase] = useState(null)

      // Every callId observed while it was still running can have its original read;
      // one first seen after settlement cannot, and must not read the mutated file.
      if (entry !== null && !settled) seenRunningRef.current.add(callId)

      const [after, setAfter] = useState(null)
      const afterCacheRef = useRef(new Map())

      useEffect(() => {
        if (callId === '' || filePath === '') return undefined
        const key = callId + '|' + filePath
        const cached = cacheRef.current.get(key)
        if (cached !== undefined) {
          setBase(cached)
          return undefined
        }
        if (!seenRunningRef.current.has(callId)) {
          setBase({ callId, status: 'none', lines: [], error: null })
          return undefined
        }
        const controller = new AbortController()
        let live = true
        setBase({ callId, status: 'loading', lines: [], error: null })
        readFile(sessionId, filePath, controller.signal).then(result => {
          if (!live) return
          // A `write` may create the file: no original text is not a failure there.
          const next = result.ok
            ? { callId, status: 'ready', lines: result.lines, error: null, truncated: result.truncated === true }
            : toolName === 'write'
              ? { callId, status: 'none', lines: [], error: null }
              : { callId, status: 'error', lines: [], error: result.error }
          cacheRef.current.set(key, next)
          setBase(next)
        }, error => {
          if (!live) return
          setBase(toolName === 'write'
            ? { callId, status: 'none', lines: [], error: null }
            : { callId, status: 'error', lines: [], error: (error && error.message) || String(error) })
        })
        // Only a new call or path retires the read: a settlement must not abort it.
        return () => { live = false; controller.abort() }
      }, [callId, filePath, readFile, sessionId, toolName])

      useEffect(() => {
        if (!settled || callId === '' || filePath === '') return undefined
        const key = callId + '|' + filePath
        const cached = afterCacheRef.current.get(key)
        if (cached !== undefined) {
          setAfter(cached)
          return undefined
        }
        const controller = new AbortController()
        let live = true
        setAfter({ callId, status: 'loading', lines: [] })
        readFile(sessionId, filePath, controller.signal).then(result => {
          if (!live) return
          const next = result.ok
            ? { callId, status: 'ready', lines: result.lines }
            : { callId, status: 'error', lines: [], error: result.error }
          afterCacheRef.current.set(key, next)
          setAfter(next)
        }, error => {
          if (!live) return
          const next = { callId, status: 'error', lines: [], error: (error && error.message) || String(error) }
          afterCacheRef.current.set(key, next)
          setAfter(next)
        })
        return () => { live = false; controller.abort() }
      }, [callId, filePath, settled, readFile, sessionId])

      const streamText = entry === null ? '' : textOf(entry.call, toolName === 'write' ? 'content' : 'new_string')
      const oldText = entry !== null && toolName === 'edit' ? textOf(entry.call, 'old_string') : ''
      const oldReady = entry !== null && toolName === 'edit' && settledArg(entry.call, 'old_string')
      const newLines = linesOf(streamText)
      const ownBase = base !== null && base.callId === callId ? base : null
      const ownAfter = after !== null && after.callId === callId ? after : null
      const baseline = ownBase !== null && ownBase.status === 'ready' ? ownBase.lines : []
      const region = toolName === 'edit' && oldReady && baseline.length > 0 ? locateRegion(baseline, oldText) : null

      const bodyRef = useRef(null)
      const stripRef = useRef(null)

      // Right-click on a chip opens a small menu at the pointer; any press outside
      // it, Escape, or a strip scroll closes it again.
      const [settingsOpen, setSettingsOpen] = useState(false)
      const settingsRef = useRef(null)

      // The eye in the header hides the scene; the choice sticks across sessions.
      const [sceneOn, setSceneOn] = useState(() => {
        try {
          const stored = localStorage.getItem('dsh-code-live.scene')
          if (stored !== null) return stored === '1'
        } catch (error) {
          console.error('[dsh-code-live] scene preference', error)
        }
        return SETTINGS.scene
      })
      const [character, setCharacter] = useState(() => {
        try {
          const stored = localStorage.getItem('dsh-code-live.character')
          if (stored === 'maid' || stored === 'mint') return stored
        } catch (error) {
          console.error('[dsh-code-live] character preference', error)
        }
        return SETTINGS.character
      })
      const [drink, setDrink] = useState(() => {
        try {
          const stored = localStorage.getItem('dsh-code-live.drink')
          if (stored === 'coffee' || stored === 'tea') return stored
        } catch (error) {
          console.error('[dsh-code-live] drink preference', error)
        }
        return SETTINGS.drink
      })
      const setDrinkPick = next => {
        setDrink(next)
        try { localStorage.setItem('dsh-code-live.drink', next) } catch (error) {
          console.error('[dsh-code-live] drink preference', error)
        }
      }

      const setCharacterPick = next => {
        setCharacter(next)
        try { localStorage.setItem('dsh-code-live.character', next) } catch (error) {
          console.error('[dsh-code-live] character preference', error)
        }
      }

      const toggleScene = () => {
        setSceneOn(previous => {
          const next = !previous
          try { localStorage.setItem('dsh-code-live.scene', next ? '1' : '0') } catch (error) {
            console.error('[dsh-code-live] scene preference', error)
          }
          return next
        })
      }

      // A call that writes more than SMOKE_LINES keeps the keyboard smoking while it
      // streams and for a moment after it settles.
      const bigWrite = entry !== null && newLines.length > SMOKE_LINES
      const [smokeHold, setSmokeHold] = useState(false)
      useEffect(() => {
        if (!bigWrite) {
          setSmokeHold(false)
          return undefined
        }
        if (!settled) {
          setSmokeHold(true)
          return undefined
        }
        const timer = setTimeout(() => setSmokeHold(false), 2400)
        return () => clearTimeout(timer)
      }, [bigWrite, settled])

      // The settings popover closes on an outside press or Escape.
      useEffect(() => {
        if (!settingsOpen) return undefined
        const onDown = event => {
          const host = settingsRef.current
          if (host !== null && event.target instanceof Node && host.contains(event.target)) return
          setSettingsOpen(false)
        }
        const onKey = event => {
          if (event.key === 'Escape') setSettingsOpen(false)
        }
        document.addEventListener('mousedown', onDown)
        document.addEventListener('keydown', onKey)
        return () => {
          document.removeEventListener('mousedown', onDown)
          document.removeEventListener('keydown', onKey)
        }
      }, [settingsOpen])

      const [menu, setMenu] = useState(null)
      const barRef = useRef(null)

      useEffect(() => {
        if (menu === null) return undefined
        const onDown = event => {
          const bar = barRef.current
          if (bar !== null && event.target instanceof Node && bar.contains(event.target)) return
          setMenu(null)
        }
        const onKey = event => {
          if (event.key === 'Escape') setMenu(null)
        }
        document.addEventListener('mousedown', onDown)
        document.addEventListener('keydown', onKey)
        return () => {
          document.removeEventListener('mousedown', onDown)
          document.removeEventListener('keydown', onKey)
        }
      }, [menu])

      // Many files outgrow the strip: keep the file being written in view.
      useEffect(() => {
        const strip = stripRef.current
        if (strip === null) return
        const active = strip.querySelector('[data-dcl-tab-active]')
        if (active === null) return
        const box = strip.getBoundingClientRect()
        const rect = active.getBoundingClientRect()
        if (rect.left < box.left) strip.scrollLeft -= box.left - rect.left + 12
        else if (rect.right > box.right) strip.scrollLeft += rect.right - box.right + 12
      }, [activePath, visible.length])

      const stickRef = useRef(true)
      const scrolledForRef = useRef('')

      // Keep the overlay, not the file end, in view while the arguments stream.
      useEffect(() => {
        const body = bodyRef.current
        if (body === null) return
        if (scrolledForRef.current !== callId) {
          scrolledForRef.current = callId
          stickRef.current = true
        }
        if (!stickRef.current) return
        const anchor = body.querySelector('[data-dcl-anchor]')
        if (anchor === null) {
          body.scrollTop = body.scrollHeight
          return
        }
        const box = body.getBoundingClientRect()
        const rect = anchor.getBoundingClientRect()
        if (rect.bottom > box.bottom - 24) body.scrollTop += rect.bottom - box.bottom + 48
        else if (rect.top < box.top) body.scrollTop -= box.top - rect.top + 16
      }, [streamText, callId, settled])

      // A settled file is browsable: land on its first changed line when the tab
      // changes, the way opening a diff jumps to the hunk.
      useEffect(() => {
        if (!settled) return
        const body = bodyRef.current
        if (body === null) return
        const anchor = body.querySelector('[data-dcl-anchor]')
        if (anchor === null) {
          body.scrollTop = 0
          return
        }
        const delta = anchor.getBoundingClientRect().top - body.getBoundingClientRect().top
        body.scrollTop = Math.max(0, body.scrollTop + delta - 48)
      }, [activePath, settled, ownAfter])

      // A change that removes lines keeps its red frame for a moment after the call
      // settles, so the deletion is visible before the file takes over.
      const deleteSettled = settled && toolName === 'edit' && region !== null && baseline.length > 0
        && newLines.length < region.count
      const [deleteFrame, setDeleteFrame] = useState(false)
      useEffect(() => {
        if (!deleteSettled) {
          setDeleteFrame(false)
          return undefined
        }
        setDeleteFrame(true)
        const timer = setTimeout(() => setDeleteFrame(false), 1400)
        return () => clearTimeout(timer)
      }, [deleteSettled, callId])

      // `start` means the arguments finished streaming and the tool is dispatching — an
      // approval pause lands here, so the pill must not keep claiming generation.
      const phase = entry !== null && !settled ? entry.call.phase : null
      const state = entry === null ? 'idle'
        : settled ? (failed ? 'reverted' : 'applied')
          : phase === 'start' ? 'pending' : 'streaming'
      const pillText = state === 'streaming' ? t('stateStreaming')
        : state === 'pending' ? t('statePending')
          : state === 'applied' ? t('stateApplied')
            : state === 'reverted' ? t('stateReverted') : t('stateIdle')

      if (entry === null) {
        // Nothing to show because every chip was closed is not the same state as
        // nothing to show yet: offer the way back.
        const hidden = files.length > 0
        return h('div', { className: 'dcl-root' },
          h(Style),
          h('div', { className: 'dcl-head' }, h('span', { className: 'dcl-title' }, t('tabTitle'))),
          h('div', { className: 'dcl-body' },
            h('div', { className: 'dcl-empty' },
              h('div', { className: 'dcl-empty-art' }, h(EmptyArt)),
              h('div', { className: 'dcl-empty-title' }, hidden ? t('closedTitle') : t('emptyTitle')),
              h('div', { className: 'dcl-empty-hint' }, hidden ? t('closedHint') : t('emptyHint')),
              hidden
                ? h('button', {
                  type: 'button',
                  className: 'dcl-empty-action',
                  onClick: () => setClosed(new Map()),
                }, t('showAll'))
                : h('div', { className: 'dcl-empty-wait' }, h('span', { className: 'dcl-dot' }), t('emptyWaiting')))))
      }

      const notices = []
      if (ownBase !== null && ownBase.status === 'loading') {
        notices.push(h('div', { key: 'loading', className: 'dcl-hint' }, t('loadingBase')))
      }
      if (ownBase !== null && ownBase.status === 'error') {
        notices.push(h('div', { key: 'failed', className: 'dcl-warning' }, t('baseFailed') + ': ' + String(ownBase.error)))
      }
      if (ownBase !== null && ownBase.truncated === true) {
        notices.push(h('div', { key: 'truncated', className: 'dcl-hint' }, t('baseTruncated')))
      }
      if (toolName === 'edit' && oldReady && oldText !== '' && baseline.length > 0 && region === null) {
        notices.push(h('div', { key: 'noregion', className: 'dcl-hint' }, t('noRegion')))
      }

      const rows = []
      if (settled && !deleteFrame) {
        // Settled: the complete current file, every touched line marked.
        const view = ownAfter
        let lines = null
        if (view !== null && view.status === 'ready') {
          lines = view.lines
        } else if (baseline.length > 0 && region !== null) {
          lines = baseline.slice(0, region.start).concat(newLines, baseline.slice(region.start + region.count))
        } else if (toolName === 'write' && newLines.length > 0) {
          lines = newLines
        }
        if (lines === null) {
          notices.push(h('div', { key: 'file-missing', className: 'dcl-hint' }, t('fileFailed')))
        } else {
          if (view !== null && view.status === 'loading') {
            notices.push(h('div', { key: 'file-loading', className: 'dcl-hint' }, t('fileLoading')))
          }
          if (view !== null && view.status === 'error') {
            notices.push(h('div', { key: 'file-error', className: 'dcl-hint' }, t('fileFailed') + ': ' + String(view.error)))
          }
          if (lines.length > MAX_FILE_VIEW) {
            notices.push(h('div', { key: 'file-truncated', className: 'dcl-hint' }, t('fileTruncated')))
          }
          const shown = lines.slice(0, MAX_FILE_VIEW)
          const diff = baseline.length > 0 ? diffRows(baseline, shown) : null
          // Deletions have no line left to mark: the settled view shows the file as
          // it now is, so only surviving changed lines carry a bar.
          const fileRows = (diff !== null
            ? diff.rows
            : shown.map((text, index) => ({ no: index + 1, text, changed: toolName === 'write' && ownBase !== null && ownBase.status === 'none' })))
            .filter(row => row.deleted === undefined)
          const cells = highlightSlice(shown, 0, shown.length)
          let anchorSet = false
          let lineIndex = 0
          fileRows.forEach((row, index) => {
            const isAnchor = row.changed === true && !anchorSet
            if (isAnchor) anchorSet = true
            rows.push(h(Row, {
              key: 'f' + String(index),
              number: row.no,
              text: row.text,
              cells: cells[lineIndex] === undefined ? [] : cells[lineIndex],
              kind: row.changed === true ? 'changed' : 'context',
              bar: row.changed === true,
              anchor: isAnchor,
            }))
            lineIndex++
          })
        }
      } else {
        // Streaming: the original file, with one overlay box growing in place.
        const start = toolName === 'write' ? 0 : (region === null ? -1 : region.start)
        const count = toolName === 'write' ? baseline.length : (region === null ? 0 : region.count)
        const oldCount = start >= 0 ? Math.min(count, MAX_OLD_LINES) : 0
        const oldCells = oldCount > 0 ? highlightSlice(baseline, start, oldCount) : []
        const newShown = newLines.slice(-MAX_NEW_LINES)
        const dropped = newLines.length - newShown.length
        const newCells = highlightSlice(newShown, 0, newShown.length)
        // A change that leaves fewer lines than it replaces is a deletion: the box
        // turns red and the removed tail of the old block is struck through.
        const newComplete = settledArg(entry.call, toolName === 'write' ? 'content' : 'new_string')
        const removing = count > 0 && newComplete && newShown.length < count
        const newSet = newShown.length > 0 ? h('div', { className: 'dcl-newset' },
          newShown.map((text, index) => h(Row, {
            key: 'new' + String(index),
            number: (start >= 0 ? start : 0) + dropped + index + 1,
            text,
            cells: newCells[index],
            kind: 'new',
            delay: Math.min(index, 16) * 18,
            caret: state === 'streaming' && index === newShown.length - 1,
          }))) : null
        const overlay = h('div', {
          key: 'overlay',
          className: 'dcl-overlay' + (removing || deleteSettled ? ' is-delete' : newShown.length > 0 ? ' is-live' : ''),
          'data-dcl-anchor': '',
        },
        start >= 0 && count > 0
          ? h('div', { className: 'dcl-collapse' + (removing || newShown.length > 0 ? ' is-gone' : '') },
            h('div', { className: 'dcl-oldset' },
              Array.from({ length: oldCount }, (_, i) => h(Row, {
                key: 'old' + String(i),
                number: start + i + 1,
                text: baseline[start + i],
                cells: oldCells[i],
                kind: 'old',
              }))))
          : null,
        newSet)

        if (start >= 0) {
          const beforeCells = highlightSlice(baseline, 0, start)
          for (let i = 0; i < start; i++) {
            rows.push(h(Row, {
              key: 'pre' + String(i), number: i + 1, text: baseline[i], cells: beforeCells[i], kind: 'context',
            }))
          }
          rows.push(overlay)
          const from = start + count
          const last = Math.min(baseline.length, MAX_FILE_VIEW)
          if (from < last) {
            const afterCells = highlightSlice(baseline, from, last - from)
            for (let i = from; i < last; i++) {
              rows.push(h(Row, {
                key: 'post' + String(i), number: i + 1, text: baseline[i], cells: afterCells[i - from], kind: 'context',
              }))
            }
          }
          if (baseline.length > last) {
            rows.push(h(Omitted, { key: 'more', t, count: baseline.length - last }))
          }
        } else {
          rows.push(overlay)
        }
      }

      const closeOthers = () => {
        const keep = entry === null ? '' : entry.path
        setClosed(previous => {
          const next = new Map(previous)
          for (const file of visible) {
            if (file.path !== keep) next.set(file.path, file.call.callId)
          }
          return next
        })
        setMenu(null)
      }
      const closeEvery = () => {
        setClosed(previous => {
          const next = new Map(previous)
          for (const file of visible) next.set(file.path, file.call.callId)
          return next
        })
        setPickedPath('')
        setMenu(null)
      }

      const chips = visible.length > 0 ? h('div', { className: 'dcl-tabs', role: 'tablist', ref: stripRef },
        visible.map(file => {
          const active = file.path === activePath
          return h('div', {
            key: file.path,
            role: 'tab',
            tabIndex: 0,
            'aria-selected': active,
            'data-dcl-tab-active': active ? '' : undefined,
            className: 'dcl-tab' + (active ? ' is-active' : ''),
            title: file.path,
            onClick: () => setPickedPath(file.path),
            onContextMenu: event => {
              event.preventDefault()
              const bar = barRef.current
              if (bar === null) return
              const box = bar.getBoundingClientRect()
              setMenu({ x: Math.max(4, event.clientX - box.left), y: event.clientY - box.top + 4 })
            },
            onKeyDown: event => {
              if (event.key !== 'Enter' && event.key !== ' ') return
              event.preventDefault()
              setPickedPath(file.path)
            },
          },
          h('span', { className: 'dcl-tab-dot is-' + stageOf(file) }),
          h('span', { className: 'dcl-tab-name' }, basenameOf(file.path)),
          h('button', {
            type: 'button',
            className: 'dcl-tab-x',
            'aria-label': t('closeTab'),
            title: t('closeTab'),
            onClick: event => {
              event.stopPropagation()
              setClosed(previous => {
                const next = new Map(previous)
                next.set(file.path, file.call.callId)
                return next
              })
              if (active) setPickedPath('')
            },
          }, '\u00d7'))
        })) : null

      const strip = chips === null ? null : h('div', { className: 'dcl-tabbar', ref: barRef },
        chips,
        menu === null ? null : h('div', {
          className: 'dcl-menu',
          role: 'menu',
          style: { left: menu.x + 'px', top: menu.y + 'px' },
        },
          h('button', {
            type: 'button',
            role: 'menuitem',
            className: 'dcl-menu-item',
            onClick: closeOthers,
          }, t('closeOthers')),
          h('button', {
            type: 'button',
            role: 'menuitem',
            className: 'dcl-menu-item',
            onClick: closeEvery,
          }, t('closeAll'))))

      return h('div', { className: 'dcl-root', style: sceneOn ? { '--dcl-scene-height': SETTINGS.sceneHeight + 'px' } : undefined },
        h(Style),
        h('div', { className: 'dcl-head' },
          h('span', { className: 'dcl-kind' }, toolName),
          h('span', { className: 'dcl-path', title: filePath }, filePath),
          h('div', { className: 'dcl-settings-wrap', ref: settingsRef },
            h('button', {
              type: 'button',
              className: 'dcl-gear',
              title: t('settings'),
              'aria-label': t('settings'),
              'aria-expanded': settingsOpen ? 'true' : 'false',
              onClick: () => setSettingsOpen(open => !open),
            }, h(GearIcon)),
            settingsOpen
              ? h('div', { className: 'dcl-settings', role: 'dialog', 'aria-label': t('settingsTitle') },
                h('div', { className: 'dcl-settings-title' }, t('settingsTitle')),
                h('div', { className: 'dcl-settings-row' },
                  h('span', { className: 'dcl-settings-label' }, t('sceneLabel')),
                  h('div', { className: 'dcl-seg' },
                    h('button', {
                      type: 'button',
                      className: 'dcl-seg-btn is-icon' + (sceneOn ? ' is-on' : ''),
                      title: t('sceneOn'),
                      'aria-label': t('sceneOn'),
                      'aria-pressed': sceneOn ? 'true' : 'false',
                      onClick: () => { if (!sceneOn) toggleScene() },
                    }, h(EyeGlyph)),
                    h('button', {
                      type: 'button',
                      className: 'dcl-seg-btn is-icon' + (sceneOn ? '' : ' is-on'),
                      title: t('sceneOff'),
                      'aria-label': t('sceneOff'),
                      'aria-pressed': sceneOn ? 'false' : 'true',
                      onClick: () => { if (sceneOn) toggleScene() },
                    }, h(EyeGlyph, { off: true })))),
                h('div', { className: 'dcl-settings-row' },
                  h('span', { className: 'dcl-settings-label' }, t('characterLabel')),
                  h('div', { className: 'dcl-seg' },
                    h('button', {
                      type: 'button',
                      className: 'dcl-seg-btn' + (character === 'maid' ? ' is-on' : ''),
                      'aria-pressed': character === 'maid' ? 'true' : 'false',
                      onClick: () => setCharacterPick('maid'),
                    }, t('charMaid')),
                    h('button', {
                      type: 'button',
                      className: 'dcl-seg-btn' + (character === 'mint' ? ' is-on' : ''),
                      'aria-pressed': character === 'mint' ? 'true' : 'false',
                      onClick: () => setCharacterPick('mint'),
                    }, t('charMint')))),
                h('div', { className: 'dcl-settings-row' },
                  h('span', { className: 'dcl-settings-label' }, t('drinkLabel')),
                  h('div', { className: 'dcl-seg' },
                    h('button', {
                      type: 'button',
                      className: 'dcl-seg-btn is-emoji' + (drink === 'coffee' ? ' is-on' : ''),
                      title: t('drinkCoffee'),
                      'aria-label': t('drinkCoffee'),
                      'aria-pressed': drink === 'coffee' ? 'true' : 'false',
                      onClick: () => setDrinkPick('coffee'),
                    }, '\u2615'),
                    h('button', {
                      type: 'button',
                      className: 'dcl-seg-btn is-emoji' + (drink === 'tea' ? ' is-on' : ''),
                      title: t('drinkTea'),
                      'aria-label': t('drinkTea'),
                      'aria-pressed': drink === 'tea' ? 'true' : 'false',
                      onClick: () => setDrinkPick('tea'),
                    }, '\u{1f375}'))))
              : null),
          h('span', { className: 'dcl-pill is-' + state, role: 'status' }, h('span', { className: 'dcl-dot' }), pillText)),
        strip,
        h('div', {
          className: 'dcl-body',
          ref: bodyRef,
          onScroll: event => {
            const el = event.currentTarget
            stickRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 120
          },
        }, notices, rows),
        sceneOn
          ? h(SceneFigure, {
            active: state === 'streaming',
            character,
            drink,
            smoking: smokeHold,
          })
          : null)
    }

    return {
      inject: ['slots', 'locale', 'sidebarRightTabs', 'sidebarRight', 'remote', 'remote.workspaceFiles'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-code-live: dictionaries')
        const t = ctx.locale.bind(NS)
        const reportError = error => {
          console.error('[dsh-code-live]', error)
        }

        /**
         * Read one text file page by page through the existing workspace Remote.
         * @param sessionId - the Session resolving relative paths.
         * @param path - workspace path handed to the Host.
         * @param signal - cancels the read.
         * @returns the lines, or the failure message.
         */
        async function readFile(sessionId, path, signal) {
          const lines = []
          let offset = 1
          let eof = false
          for (let page = 0; page < MAX_PAGES && !eof && lines.length < MAX_FILE_LINES; page++) {
            let result
            try {
              result = await ctx.remote.workspaceFiles.read(sessionId, path, { offset, limit: PAGE_LIMIT }, signal)
            } catch (error) {
              return { ok: false, error: (error && error.message) || String(error) }
            }
            if (!result || result.ok !== true) {
              const failure = result && result.error
              return { ok: false, error: (failure && (failure.message || failure.code)) || 'read failed' }
            }
            const value = result.value || {}
            const text = typeof value.text === 'string' ? value.text : ''
            const count = typeof value.lines === 'number' ? value.lines : (text === '' ? 0 : text.split('\n').length)
            if (count === 0) { eof = true; break }
            for (const line of text.split('\n')) lines.push(line)
            eof = value.eof === true
            offset += count
          }
          return { ok: true, lines: lines.slice(0, MAX_FILE_LINES), truncated: !eof }
        }

        const TabBody = props => h(CodeLiveTab, { ...props, t, readFile })

        /**
         * Headless watcher: opens the panel for a new file mutation, then hands the
         * keyboard focus back to whatever had it. The tab still comes forward — the
         * user sees the file — but a caret in the composer keeps its place.
         */
        function AutoOpen(props) {
          const useChat = props.useChat
          const running = useChat(snapshot => snapshot.legacy.runningCalls)
          const seenRef = useRef(new Set())
          useEffect(() => {
            for (const call of running || []) {
              if (!isFileCall(call) || pathOf(call) === '') continue
              if (seenRef.current.has(call.callId)) continue
              seenRef.current.add(call.callId)
              try {
                const active = ctx.sidebarRight.active()
                // Already showing: the panel follows by itself.
                if (active !== undefined && active.kind === TAB_KIND) continue
                const previous = document.activeElement
                ctx.sidebarRight.openTab(TAB_KIND)
                // The column focuses the pane it opens into; give the caret back.
                if (previous !== null && previous !== document.body && typeof previous.focus === 'function') {
                  setTimeout(() => {
                    if (document.activeElement === previous) return
                    try { previous.focus({ preventScroll: true }) } catch (error) { reportError(error) }
                  }, 120)
                }
              } catch (error) {
                reportError(error)
              }
            }
          }, [running])
          return null
        }

        ctx.effect(() => ctx.sidebarRightTabs.register({
          id: TAB_ID,
          kind: TAB_KIND,
          title: () => t('tabTitle'),
          guide: [{
            id: TAB_ID,
            order: 65,
            title: () => t('guideTitle'),
            description: () => t('guideDesc'),
            icon: StreamGlyph,
          }],
        }), 'dsh-code-live: tab type')

        ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
          name: 'sidebar.right.pane.tab',
          key: TAB_ID,
          locale: NS,
        }, TabBody)), 'dsh-code-live: tab body')

        ctx.effect(() => ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
          name: 'conversation.composer.dock',
          id: 'dsh-code-live.auto',
          order: 90,
        }, AutoOpen)), 'dsh-code-live: auto open')
      },
    }
  },
})
