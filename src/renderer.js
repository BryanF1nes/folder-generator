window.addEventListener('DOMContentLoaded', () => {
    const generateFoldersButton = document.getElementById('generateFolders');
    
    generateFoldersButton.addEventListener('click', async () => {
        const selection = document.getElementById('folderStructure').value;
        try {
            const result = await window.electronAPI.generateFolders(selection);

            // Check if result is defined before accessing properties
            if (result && result.success) {
                await window.electronAPI.showToastSuccess(`${selection} folder structure generated successfully!`);
            } else if (result) {
                await window.electronAPI.showToastError(`Error: ${result.error}`);
            } else {
                await window.electronAPI.showToastError('Error: Unexpected result (undefined)');
            }
        } catch (error) {
            await window.electronAPI.showToastError(`Error: ${error.message}`);
        }
    });
});
