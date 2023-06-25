const { listContacts, getContactById, addContact, removeContact } = require('./contacts');
const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch(action) {
        case 'list':
            const allContacts = await listContacts();
            console.table(allContacts);
            break;
        case 'get':
            const oneContact = await getContactById(id);
            console.table(oneContact);
            break;
        case 'add':
            const newContact = await addContact(name, email, phone);
            console.table(newContact);
            break;
        case 'remove':
            const deletedContact = await removeContact(id);
            console.table(deletedContact);
            break;
        default: 
            return console.log('Unknown action');
    }
};

program
    .option('-a, --action <type>')
    .option('-i, --id <type>')
    .option('-n, --name <type>')
    .option('-e, --email <type>')
    .option('-p, --phone <type>');


program.parse();

const argv = program.opts();

invokeAction(argv);
