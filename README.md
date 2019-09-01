# webhook-node.js

#### Install PM2
Install PM2 using NPM:

```
sudo npm install -g pm2
```


#### Starting PM2 on Boot
To make sure PM2 can do it's job when (re)booting your operating system, it needs to be started on boot. Luckily, PM2 has a handy helper for this.

```
pm2 startup
```
PM2 will now show you a command you need to execute.


#### Make a Node project start script.
To use PM2 in combination with Node project, we need to make a simple shell script. Preferable, we put this script outside the Node project folder to make sure it won't give us any issues if we want to upgrade the mirror.

```
cd ~
nano mm.sh
```
Add the following lines:

```
cd ~/Node project
DISPLAY=:0 npm start
```
Save and close, using the commands CTRL-O and CTRL-X. Now make sure the shell script is executable by performing the following command:

```
chmod +x mm.sh
```
You are now ready to the Node project using this script using PM2.

#### Starting your Node project with PM2
Simply start your mirror with the following command:

```
pm2 start mm.sh
```
You mirror should now boot up and appear on your screen after a few seconds.

#### Enable restarting of the Node project script.
To make sure the Node project restarts after rebooting, you need to save the current state of all scripts running via PM2. To do this, execute the following command

```
pm2 save
```

And that's all there is! You Node project should now reboot after start, and restart after any failure.

#### Controlling via PM2.
With your Node project running via PM2, you have some handy tools at hand:

#### Restarting your Node project
```
pm2 restart mm
```
#### Stopping your Node project
```
pm2 stop mm
```
#### Show the Node project logs
```
pm2 logs mm
```
#### Show the Node project process information
```
pm2 show mm
```