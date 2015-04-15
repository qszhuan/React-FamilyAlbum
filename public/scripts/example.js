
var FamilyAlbum = React.createClass({displayName: "Family Album",
   render: function () {
         return (
             <div>
                 <strong>Family Album</strong>
                 <AlbumList />
             </div>
         );
   }
});

var AlbumList = React.createClass({displayName: "Album List",
    render: function() {
        return (
            <div>
              <Album />
              <Album />
              <Album />
            </div>
            );
    }
});

var Album = React.createClass({displayName: "Album",
    render: function () {
        return (
            <div>
                <h1>Album 1 </h1>
                <Photo />
                <Photo />
            </div>
            );
    }

});

var Photo = React.createClass({displayName: "Photo",
    render: function () {
        var divStyle = {
            display: 'inline-block',
            padding: '15px 15px 0px 15px',
            'background-color':'#eff'
        };
        var imgStyle = {
           width:'200px',
           height:'200x'
        };
        var floatRight = {
            float: 'right'
        };
        return (
            <div style={divStyle}>
            <img style={imgStyle} src="https://avatars3.githubusercontent.com/u/1080538?v=3&s=460" />
            <div style={{display:'none'}}>
                <a href="#">View</a>
                <a href="#" style={floatRight}>Delete</a>
            </div>

            <strong style={{'text-align':'center', display:'block'}}>
            title
            </strong>
            </div>
            );
    }
});



React.render(
    <FamilyAlbum />,
    document.getElementById("content")
);