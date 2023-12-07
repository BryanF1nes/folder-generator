const path = require('path');
const fs = require('fs');

const designFolderStructure = (rootPath) => {
    const acad = path.join(rootPath, 'ACAD');
    const engin = path.join(rootPath, 'Engineering Documents');
    const acadFolders = ['Archives', 'Backups', 'Data Shortcuts', 'Drawings', 'Existing Conditions', 'Profiles', 'Sheet Set', 'XREF'];
    const archiveFolders = ['_Comments', '_PDF', 'Survey', 'Architect', 'Construction', 'Electrical', 'Equipment', 'Owner', 'Photos', 'Plumbing', 'HVAC', 'Record Set', 'Structural'];
    const enginFolders = ['App', 'Bid', 'Calc', 'Const', 'Contracts', 'Correspondence', 'Cost Est', 'Data', 'Equip', 'Ex Info', 'FDS', 'Specs', 'Transmittals'];

    for (const folder of acadFolders) {
        const folderPath = path.join(acad, folder);
        fs.mkdirSync(folderPath, { recursive: true });

        if (folder === 'Archives') {
            for (const archiveFolder of archiveFolders) {
                const archiveFolderPath = path.join(folderPath, archiveFolder);
                fs.mkdirSync(archiveFolderPath, { recursive: true });
            }
        }
        for (const enginFolder of enginFolders) {
            const enginFolderPath = path.join(engin, enginFolder);
            fs.mkdirSync(enginFolderPath, { recursive: true })
        }
    }

    console.log('Design folder structure created successfully.')

}

const evalFolderStructure = (rootPath) => {
    const acad = path.join(rootPath, 'ACAD');
    const engin = path.join(rootPath, 'Engineering Documents');
    const acadFolders = ['Archives', 'Backups', 'Drawings', 'Existing Conditions', 'Sheet Set', 'XREF'];
    const archiveFolders = ['_Comments', '_PDF', 'Survey', 'Equipment', 'Owner', 'Photos'];
    const enginFolders = ['Calc', 'Contracts', 'Correspondence', 'Cost Est', 'Data', 'Equip', 'Ex Info', 'Transmittals'];

    for (const folder of acadFolders) {
        const folderPath = path.join(acad, folder);
        fs.mkdirSync(folderPath, { recursive: true });

        if (folder === 'Archives') {
            for (const archiveFolder of archiveFolders) {
                const archiveFolderPath = path.join(folderPath, archiveFolder);
                fs.mkdirSync(archiveFolderPath, { recursive: true });
            }
        }
        for (const enginFolder of enginFolders) {
            const enginFolderPath = path.join(engin, enginFolder);
            fs.mkdirSync(enginFolderPath, { recursive: true })
        }
    }

    console.log('Evaluation folder structure created successfully.')

}

const permFolderStructure = (rootPath) => {
    const acad = path.join(rootPath, 'ACAD');
    const engin = path.join(rootPath, 'Engineering Documents');
    const acadFolders = ['Archives', 'Backups', 'Drawings', 'Existing Conditions', 'Sheet Set', 'XREF'];
    const archiveFolders = ['_Comments', '_PDF', 'Photos'];
    const enginFolders = ['App', 'Calc', 'Contracts', 'Correspondence', 'Data', 'Equip', 'Ex Info', 'FDS', 'Transmittals'];

    for (const folder of acadFolders) {
        const folderPath = path.join(acad, folder);
        fs.mkdirSync(folderPath, { recursive: true });

        if (folder === 'Archives') {
            for (const archiveFolder of archiveFolders) {
                const archiveFolderPath = path.join(folderPath, archiveFolder);
                fs.mkdirSync(archiveFolderPath, { recursive: true });
            }
        }
        for (const enginFolder of enginFolders) {
            const enginFolderPath = path.join(engin, enginFolder);
            fs.mkdirSync(enginFolderPath, { recursive: true })
        }
    }

    console.log('Permit folder structure created successfully.')

}

module.exports = { designFolderStructure, evalFolderStructure, permFolderStructure }