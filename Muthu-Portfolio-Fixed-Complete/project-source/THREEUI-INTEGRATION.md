# Temple Night integration

Source: https://threeui.com/source-code/temple-night.json
Revision supplied by the user: 4399487d2fb42bce39c7b032fbbb50d230bf4f0b
The three registered files are preserved byte-for-byte. THREEUI-SOURCE.json records their verified SHA-256 values.

The portfolio hero mounts Scene from src/scene-entry.tsx using TempleNightScene with variant="temple-night" inside shader-frame. Build aliases resolve the requested package imports to the exact vendored source and shared stylesheet. React 18.3.1 and Three.js 0.149.0 are pinned.

Run npm ci, then npm run build:scene to rebuild the browser assets. Deploy the contents of dist/ to a static host. The packaged dist is already built and does not need an install to deploy.

The supplied component also declares three lazy imports for other variants, which are not included in the registered bundle. They remain external, and are not requested by the selected temple-night variant. This integration supports only temple-night. The shared stylesheet references an unrelated Fragment Mono font that is not included in the registered asset list. That URL remains unchanged; the temple scene does not use that font.

Checks completed: exact source hashes, pinned Three.js version, production bundle generation, local asset links, JavaScript syntax. Browser/WebGL rendering, pointer response and responsive visual composition have not been verified in this session. Verify those on the deployed site before presenting the effect as tested.
