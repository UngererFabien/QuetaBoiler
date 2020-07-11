<template>
    <v-container>
        <v-row align="center">
            <v-col cols="4">
                <v-text-field label="Name" v-model="newContact.name"></v-text-field>
            </v-col>
            <v-col>
                <v-btn color="pink" dark @click="addNewContact">Add new contact</v-btn>
            </v-col>
        </v-row>
        <v-row v-for="contact in contacts">
            <v-col cols="6">{{contact.name}}</v-col>
            <v-col>
                <v-btn icon color="pink" @click="removeContact(contact)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { createContact, onContactsChange, deleteContact } from '@/modules/db/Contacts.js'

export default {
    name: 'Contacts',
    data: function() {
        return {
            contacts: [],
            newContact: {
                name: ''
            }
        }
    },
    methods: {
        addNewContact: function() {
            createContact(this.newContact);
        },
        removeContact: function(contact) {
            deleteContact(contact.id);
        }
    },
    created: function() {
        this.contactsListener = onContactsChange(contacts => {
            console.log(contacts);
            this.contacts = contacts;
        });
    },
    destroyed: function() {
        this.contactsListener(); // Cancel firebase listener.
    }
}
</script>