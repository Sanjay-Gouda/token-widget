
# Token Widget



## Overview

This project is a customizable widget that can be easily embedded into web pages. The widget is designed to display information related to a specific token, and the token name is dynamic, allowing users to input any token name of their choice.

## Features

- **Dynamic Token Name:** Users can customize the widget by specifying the token name of their choice.
- **Embeddable:** Easily embed the widget into your web pages using the provided script.




To get started with this project, follow the steps below:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Sanjay-Gouda/token-widget.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd token-widget
    ```

3. **Install Dependencies:**
    ```bash
    yarn install
    ```

4. **Start the Development Server:**
    ```bash
    yarn dev
    ```

    This command will start the development server, and you can view your widget at `http://localhost:3000`.



## Usage

### Embedding the Widget

1. Include the widget script in your HTML file:

    ```html
      <script
      type="text/javascript"
      src="https://coingecko-token-widget.netlify.app/index.js"
    >
    </script>
    ```

2. Create a container element where you want the widget to appear:

    ```html
    <div id="root" token-name="bitcoin"></div>



3. To apply styling include stylesheet link in your Head tag:

   ```html
     <link
      rel="stylesheet"
      type="text/css"
      href="https://coingecko-token-widget.netlify.app/assets/index-85793668.css"
    />
    
  





