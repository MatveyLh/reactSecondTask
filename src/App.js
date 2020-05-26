import React,  {useState, useEffect, useRef}  from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            k: 0,
            isLoaded:false,
            photos: [],
            itemsFeatures : [],
            itemsGallery: [],
            itemsFooter: []
        }
    }
    componentDidMount() {
        axios.get('http://itstrana.vh118.hosterby.com/teleworking/api/lending/')
            .then(res => {
                const data = res.data.results[0];
                this.setState({itemsFeatures : res.data.results[0].len_features});
                this.setState({itemsGallery : res.data.results[0].len_gallery});
                this.setState({itemsFooter : res.data.results[0].len_highlights});
                this.setState({isLoaded: true})
            })
    }

    render() {
        return(
            <div>

                <Header items={this.state.itemsFeatures}/>
                <Content items={this.state.itemsGallery}/>
                <Footer items={this.state.itemsFooter}/>
                {/*{this.state.itemsFeatures.map(item => <img src={item.avatar}/>)}*/}

            </div>
        )
    }
}
/*
const App = props => {
    const [loading, setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [photos] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://itstrana.vh118.hosterby.com/teleworking/api/lending/');
            setPosts(res.data.results);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    console.log(posts[0]);

    return (
        <div>

        </div>
    )
}*/

export default App;
