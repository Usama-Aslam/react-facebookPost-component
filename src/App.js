import React, { Component } from 'react';
import './App.css';
import Post from './Components/Post/Post';

class App extends Component {
    constructor() {
        super()
        this.state = {
            createdBy: 'Muhammad Usama',
            avatar: 'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/p160x160/41309097_916309675240240_7366884955873345536_n.jpg?_nc_cat=105&oh=d6f2a15785804f228999ea658c17fd24&oe=5C15E440',
            description: 'I am not feeling good today!',
            images: ['https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2018/03/senna.jpg?itok=4dsvu7gl&fc=50,50',
                'https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2018/03/senna.jpg?itok=4dsvu7gl&fc=50,50',
                'https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2018/03/senna.jpg?itok=4dsvu7gl&fc=50,50', 'https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2018/03/senna.jpg?itok=4dsvu7gl&fc=50,50',
                'https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2018/03/senna.jpg?itok=4dsvu7gl&fc=50,50',
                'https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2018/03/senna.jpg?itok=4dsvu7gl&fc=50,50'],
            createdAt: Date.now(),
            likes: ['Muhammad Usama', 'Manal', 'Ali', 'Farooq']
        }
    }

    render() {
        const { images, avatar, createdAt, createdBy, description, likes } = this.state
        return (
            <div className="App">
                <Post image={images} createdAt={createdAt} avatar={avatar} createdBy={createdBy} description={description} likes={likes} />
            </div>
        );
    }
}

export default App;
