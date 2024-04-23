import type { CanvasAdaptorFactory, ComputedConfiguration, TemplateWriter } from "./template";
import { generateClientMixin, generateMixin } from "./mixin";
import { generateEntrypoint } from "./modentrypoint";
import { getJavaVersion } from "./java"
import { getMinorMinecraftVersion } from "./minecraft"
import { generateModIcon } from "./icon";

function usesNewModid(fabricVersion: string) : boolean {
  return Number(fabricVersion.split(".")[1]) >= 59;
}

export async function addModJson(writer: TemplateWriter, canvas: CanvasAdaptorFactory, config: ComputedConfiguration) {
  const mixins = [
    ...await generateMixin(writer, config),
    ...(config.splitSources ? await generateClientMixin(writer, config) : [])
  ];

  const index = config.minecraftVersion.indexOf("-");
  const minecraftVersion = config.minecraftVersion.substring(0, index === -1 ? config.minecraftVersion.length : index + 1);

  const notebookModJson : any = {
    "schema_version": 1,
    "id": config.modid,
    "version": "${version}",
    "name": config.projectName,
    "description": "This is an example description! Tell everyone what your mod is about!",
    "authors": [
      "Me!"
    ],
    "contact": {
      "homepage": "https://bookkeepersmc.github.io/",
      "sources": "https://github.com/FabricMC/fabric-example-mod"
    },
    "license": "CC0-1.0",
    "icon": `assets/${config.modid}/icon.png`,
    "environment": "*",
    "entrypoints": await generateEntrypoint(writer, config),
    "mixins": mixins,
    "depends": {
      "notebookloader": ">=" + config.loaderVersion,
      "minecraft": "~" + minecraftVersion,
      "java": ">=" + getJavaVersion(config.minecraftVersion).release
    },
    "suggests": {
      "another-mod": "*"
    }
  }

  notebookModJson.depends[usesNewModid(config.fabricVersion) ? "fabric-api" : "fabric"] = "*"

  if (config.kotlin) {
    notebookModJson.depends = {
      ...notebookModJson.depends,
      "fabric-language-kotlin": ">=" + config.kotlin.kotlinVersion
    }
  }

  await writer.write("src/main/resources/notebook.mod.json", JSON.stringify(notebookModJson, null, "\t"));
  await writer.write(`src/main/resources/assets/${config.modid}/icon.png`, generateModIcon(config.projectName, config.uniqueModIcon, canvas));
}