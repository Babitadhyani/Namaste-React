//nesting of element
/*
<div>
    <div>
        <h1>
        <h2>
    </div>    
    <div>
        <h1>
        <h2>
    </div>    
</div>
*/
const parent = React.createElement("div",{id: "pareant"},
    [React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag")] 
     ),
     React.createElement("div",{id: "child2"},
        [React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag")] 
     )
    ]
);


const heading = React.createElement("h1", {id : "heading"}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);