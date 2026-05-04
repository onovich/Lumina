项目交接文档：极光：以太黎明 (Lumina: Aether Dawn)

1. 项目概述

本项目是一款基于 WebGL 的第一人称 3D 艺术探索游戏。玩家在黑白单色的平缓丘陵中探索，通过点亮分布在地图各处的“神龛”来激活高耸的“方尖碑”。随着激活进度的推进，世界将从冰冷的灰度逐渐演变为梦幻的粉蓝渐变色。

2. 核心需求设计 (Requirement Design)

2.1 视觉风格

低多边形艺术 (Low-Poly Art)：地形采用高密度平面网格偏移生成。

暮色渐变：天空盒与环境光随玩家与目标的距离动态变化。

复苏机制：点亮神龛会触发顶点色插值，使周围地表恢复彩色。

模拟辉光 (Pseudo-Bloom)：通过 Sprite 粒子模拟 3D 空间中的镜头光晕效果。

2.2 核心玩法

第一人称探索：适配移动端的双区触控系统。

引导系统：基于 Boids 鸟群算法的“萤火虫群”，在已激活点与最近的未激活目标之间拉出荧光轨迹。

神龛交互：玩家靠近神龛并对准目标点击右屏，触发火种点燃逻辑。

3. 开发文档 (Development Documentation)

3.1 技术栈

框架：React

3D 引擎：Three.js (r128+)

着色器：GLSL (用于萤火虫轨迹的渐变淡出效果)

3.2 关键模块详解

地形系统 (getH 函数)：

使用多重正弦波叠加生成的平滑起伏。

物理引擎基于此函数实时计算玩家高度，防止穿模（Snapping）。

萤火虫群 (Firefly 类)：

Boids 算法：实现凝聚（Cohesion）、分离（Separation）和对齐（Alignment）。

动态目标：目标点在 lastLitShrine 和 targetOb.tipPos 之间随时间正弦波动。

轨迹渲染：使用 ShaderMaterial 动态更新 alpha 属性实现末端淡出。

色彩辐射逻辑：

在 animate 循环中直接操作 geometry.attributes.color 属性。

采用 THREE.MathUtils.lerp 进行逐顶点的颜色平滑插值，保证性能。

3.3 物理与控制

左屏控制：映射 moveX 和 moveY，已校准坐标系。

右屏控制：映射相机的 yaw (偏航角) 和 pitch (俯仰角)。

碰撞检测：简单的重力 + 地形高度修正。

4. 项目启动与配置 (Project Startup)

4.1 核心配置表 (CONFIG)

修改 App.jsx 中的 CONFIG 对象可快速调整游戏平衡性：

worldSize: 地图范围。

obeliskCount: 方尖碑总数。

moveSpeed: 移动速度。

trailLength: 萤火虫轨迹精细度。

4.2 运行环境

环境要求：支持 WebGL 2.0 的现代浏览器。

依赖：three 库需通过 CDN 或 npm 引入。

5. 后续维护建议 (Next Steps)

性能优化：当地图方尖碑数量极多时，考虑将地形颜色更新移至 GPU 着色器处理（目前在 CPU 遍历）。

音频系统：建议引入基于距离的 3D 空间音频（如 Ambient Wind 和燃烧的噼啪声）。

更复杂的 Boids：可以为萤火虫增加避障逻辑（避开方尖碑主体）。

维护者注：本项目高度依赖 App.jsx 中的 animate 帧循环，修改逻辑时请务必保持物理计算与渲染更新的同步。