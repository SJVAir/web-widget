# The Official Web Widget for [SJVAir.com](https://www.sjvair.com)

## Accessing

- #### Embedding (Recommended)
    Our widget can be easily embedded into a website by utilizing an `iframe`. You can use the iframe code below, which includes the recommended attributes and styles, replacing `[ MONITOR_ID ]` with the desired monitor ID:  
`<iframe src="https://www.sjvair.com/widget/#/[ MONITOR_ID ]" frameborder="0" allowtransparency="true" style="overflow: hidden; width: 290px; height: 390px;"></iframe>`

- #### Self Host (Build From Source)
    Follow the [Getting Started](#getting-started) section to verify the build is working locally, then run:
    ```
    npm run build
    ```
    The production ready bundles will be located under the `dist/` directory.

## Development
#### Prerequisites
Working on this widget requires access to the SVJAir API. Make sure you have followed the [setup guide](https://github.com/SJVAir/sjvair.com#setup-guide) for getting the sjvair.com development server up and running. These instructions assume you are using the default settings for the sjvair.com development server.

#### Getting Started
1. Clone this repo and install the project dependencies:  
    ```
    git clone https://github.com/SJVAir/web-widget.git
    cd web-widget
    npm i
    ```
2. Create your `.env` file  
    ```
    cp .env.template .env
    ```
3. Start the dev server:  
    `npm run dev`

#### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

#### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
