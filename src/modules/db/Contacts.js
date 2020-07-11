import { db } from '@/modules/firebase.js';

const contactsRef = db.collection('contacts');

export async function createContact(contactData) {
    return await contactsRef.add(contactData);
}

export function onContactsChange(cb) {
    return contactsRef.onSnapshot({
        next: contactsSnapshot => {
            let contacts = contactsSnapshot.docs.map(contactSnapshot => {
                let contact = contactSnapshot.data();
                contact.id = contactSnapshot.id;

                return contact;
            });

            if (cb) cb(contacts);
        }
    });
}

export function deleteContact(contactId) {
    return contactsRef.doc(contactId).delete();
}