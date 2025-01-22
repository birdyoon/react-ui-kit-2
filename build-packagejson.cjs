// build-packagejson.cjs
const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");
const buildDir = path.resolve(__dirname, "dist");
const packageName = "seyoon-rui";

const getPackageJsonData = () => {
  const { react: reactVersion, "react-dom": reactDomVersion } =
    packageJson.dependencies;
  return {
    version: "0.0.13",
    name: packageName,
    main: "./index.cjs",
    module: "./index.js",
    types: "./types/index.d.ts",
    peerDependencies: {
      react: reactVersion,
      "react-dom": reactDomVersion,
    },
  };
};

const makePackageJson = () => {
  try {
    const buildPackageJsonData = getPackageJsonData();
    fs.writeFileSync(
      path.resolve(buildDir, "package.json"),
      JSON.stringify(buildPackageJsonData)
    );
  } catch (err) {
    console.log(err);
  }
};

makePackageJson();
