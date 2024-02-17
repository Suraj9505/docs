---
sidebar_position: 2
---

# Production

<div className="mb-5"></div>

## Requirement

<hr />

**This template relies on this essential dependencies.**

1. _NodeJS_

   - _Windows – Download and install node.js from [<font color="#FAA938">https://nodejs.org/en/</font>](https://nodejs.org/en/) Install latest LTS version_
   - _Linux – Install with terminal by this link [<font color="#FAA938">https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions</font>](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)_
   - _Mac – Download and install node.js from [<font color="#FAA938">https://nodejs.org/en/download/</font>](https://nodejs.org/en/download/) install LTS version_

<div className="mb-5"></div>

## Installation
<hr/>

<div className="border-bottom border-dark mb-4"></div>

_Here is the **steps of production**:_



1. _Start command prompt window or terminal and change to your preferred directory to `code-react` by using following command:_

```bash
cd code-react
```

2. _To install node_modules use the following command:_

```bash
npm install
```

<div className="ms-3">
_If <span className="ms-2 me-1">**`npm install`**</span> doesn't work then try the executing the following command:_
</div>

```bash
npm install --legacy-peer-deps
```

3. If you can deploy in subdirectory first you can copy and rename the following file .env.example to .env and set the production path by <font color="#FAA938">PUBLIC_URL=""</font> this key.

4. To Deploy project on server create production build by running:
```
npm run build
```

5. This will generate <font color="#FAA938">/build</font>  folder in project root directory you'll have to upload these file using a FTP on your server.

6. Now that you have followed these steps your basic installation is complete and ready to flaunt your site to the world.

**Now you will have the <font color="#FAA938">build</font> folder inside the root directory.**

:::info

   After getting the <font color="#FAA938">**build**</font> folder make sure to copy paste the `.htaccess` file from the root directory inside the <font color="#FAA938">**build**</font> folder.

:::


<div className="mb-5"></div>

## FTP Deployment

<div className="border-bottom border-dark mb-4"></div>

_File Transfer Protocol (FTP) is a standard network protocol used to transfer files from one host to another over a TCP-based network. To deploy your project to a web server, you can use an FTP client to upload your files. Here's a simple guide on using FTP for deployment:_

1. **FTP Client:**
   - _Choose an FTP client to connect to your server. Popular choices include FileZilla, Cyberduck, or WinSCP._
   - _Download and install your preferred FTP client._

2. **Server Connection:**
   - _Open your FTP client and enter the connection details provided by your hosting provider._
   - _Typically, you'll need the FTP/SFTP address, username, password, and port (usually 21 for FTP or 22 for SFTP)._

3. **Upload Files:**
   - _Navigate to the local directory where your project's build files are located (e.g., the "**<font color="#FAA938">build</font>**" folder)._
   - _Connect to your server using the FTP client._
   - _Upload the entire content of your project to the public_html directory or the designated web server root directory._

4. **Maintain Folder Structure:**
   - _Ensure that you maintain the same folder structure on the server as in your local project. This includes the **"assets,"** **"css,"** **"images,"** **"js,"** and **other necessary folders.**_

5. **Index File:**
   - _Make sure that your main **HTML** file (e.g., "**index.html**") is present in the root directory._

6. **Testing:**
   - _After uploading, visit your website's URL to ensure that the deployment was successful._

:::note
 If you have specific deployment requirements or use a hosting service with a different deployment process, refer to your hosting provider's documentation for detailed instructions.

:::

<div className="mt-5">
**Now, your project should be accessible online through your domain or server IP address. Make sure to update your DNS settings if you're using a custom domain.**
</div>

<div className="mb-5"></div>
