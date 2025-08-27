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

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
