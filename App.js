const heading = React.createElement
("div",
{id:"parent"},[
React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"heading1-1"},"iam H1-1 tag"),
React.createElement("h2",{id:"heading1-2"},"iam H1-2 tag")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"heading2-1"},"iam H2-1 tag"),
React.createElement("h2",{id:"heading2-2"},"iam H2-2 tag")]
),
React.createElement("div",{id:"child3"},
[React.createElement("h1",{id:"heading3-1"},"iam H3-1 tag"),
React.createElement("h2",{id:"heading3-2"},"iam H3-2 tag")]
)]);

//console.log(heading);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);