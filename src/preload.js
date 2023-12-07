const { contextBridge, ipcRenderer } = require('electron');
const Toastify = require('toastify-js');

contextBridge.exposeInMainWorld('electronAPI', {
    generateFolders: async (selection) => {
        try {
            const result = await ipcRenderer.invoke('generateFolders', selection);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
    showToastSuccess: async (message) => {
        Toastify({
            text: message,
            duration: 3000,
            close: true,
            style: {
                background: 'green',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
                position: 'absolute',
                top: '0%',
                width: '100%',
                zIndex: '100',
            }
        }).showToast();
    },
    showToastError: async (message) => {
        Toastify({
            text: message,
            duration: 3000,
            close: true,
            style: {
                background: 'red',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
                position: 'absolute',
                top: '0%',
                width: '100%',
                zIndex: '100',
            }
        }).showToast()
    }
});
