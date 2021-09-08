# zvvc - zoom virtual volume control
![zvvc](zvvc.png)


# Getting Started

These instructions will get you a copy of the project up and running on your local machine. 

**Prerequisites:**
* [Node.js 14](https://nodejs.org/)
* [git](https://git-scm.com/downloads)
* Windows 10

# Setup app locally

Assuming Windows 10.

Clone and install the app and it's dependencies.

```bash
git clone https://github.com/will4950/zvvc
cd zvvc 
npm install 
npm start
```

# Change the microphone

Create a `.env` file in the `zvvc` directory.

```bash
notepad .env
```

Click yes to create a new file. Copy the following into this file, replacing `YOUR DEVICE` with your microphone device name.

```bash
MICROPHONE=YOUR DEVICE
```

>NOTE: Run SoundVolumeView.exe to get the device name.


# Support

None :)  Please ping me with any discussion!