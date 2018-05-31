const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const users = [
    {
        _id: '4c1f3acd-15e7-435f-a1d9-38f3c3571173',
        name: 'Jayce Graham DDS',
        email: 'Jalon43@gmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ryandownie/128.jpg'
    },
    {
        _id: '062b1f28-3a18-40ae-a3b9-ffb9678f669a',
        name: 'Zachary Gleason',
        email: 'Luisa_Ondricka96@gmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg'
    },
    {
        _id: '8b392864-7d5e-44f9-8de8-54768c3866c0',
        name: 'Katlynn Ernser MD',
        email: 'Jarret_Beahan@hotmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/opnsrce/128.jpg'
    },
    {
        _id: 'e7b917ba-a2b8-4aaf-8ffa-5b72e7b0a347',
        name: 'Morris Huels',
        email: 'Eliseo_Pagac21@yahoo.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chris_witko/128.jpg'
    },
    {
        _id: '0d062405-0ebd-4e24-bd52-33a03ae67eb3',
        name: 'Mrs. Wilhelmine Towne',
        email: 'Vivien_Hilpert55@hotmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamglimy/128.jpg'
    },
    {
        _id: 'deaed049-8c0e-4125-8232-4ce51fa42bc2',
        name: 'Miss Brandy Wiegand',
        email: 'Albina_Larson@yahoo.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/llun/128.jpg'
    },
    {
        _id: 'de9d22d4-4e6a-44ac-babb-90774f101610',
        name: 'Berta Jenkins',
        email: 'Rosetta.Roberts18@hotmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/peter576/128.jpg'
    },
    {
        _id: 'd0f9b2d4-a171-45aa-9d25-85a20c0394d6',
        name: 'Elenora Leuschke',
        email: 'Columbus28@yahoo.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kylefoundry/128.jpg'
    },
    {
        _id: '9c7af797-f5ba-432d-83ad-01e2d22538ac',
        name: 'Rory Kerluke',
        email: 'Dell.Ratke71@hotmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/envex/128.jpg'
    },
    {
        _id: '486652d4-4793-4057-a1e7-a125a0545998',
        name: 'Alexandra Effertz',
        email: 'Enos_Hilll@yahoo.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/joemdesign/128.jpg'
    }
]

app.get('/user', (req, res) => {
    res.send({ success: true, users });
});

app.get('/user/:_id', (req, res) => {
    const { _id } = req.params;
    const user = users.find(u => u._id === _id);
    if (!user) return res.status(404).send({ success: false, message: 'CANNOT_FIND_USER' });
    res.send({ success: true, user });
});

app.listen(3000, () => console.log('Server started'));
