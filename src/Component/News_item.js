import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, url, author, date} = this.props;
        this.defaultImage = "https://image.cnbcfm.com/api/v1/image/106964137-1634845443667-2022_GMC_Sierra_1500_Denali_Ultimate_in_Titanium_Rush_dead_front.jpg?v=1672848507&w=1920&h=1080"
        
        
        return (

            <div className="my-3">
                <div className="card">
                    <img src={imageUrl?imageUrl:this.defaultImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title?title.slice(0, 60): ""}</h5>
                        <p className="card-text">{description?description.slice(0, 150): ""}...</p>
                        <p class="card-text"><small class="text-muted">By {author} on  {new Date(date).toGMTString()}</small></p>
                        <a href={url} className="btn btn-sm btn-dark">Read More...</a>
                    </div>
                </div>
            </div>
        )
        
    }
}
