$(function(){ // on dom ready

var elesJson = {
  nodes: [
    { data: { id: 'a', name: 'Firewall', foo: 3, bar: 5, baz: 9 }, position: { x: 70, y: 20 } },
    { data: { id: 'b', name: 'NAT', foo: 7, bar: 1, baz: 9 }, position: { x: 100, y: 20 } },
    { data: { id: 'c', name: 'DHCP', foo: 2, bar: 7, baz: 9 }, position: { x: 70, y: 60 } },
    { data: { id: 'd', name: 'Host', foo: 9, bar: 5, baz: 9 }, position: { x: 30, y: 40 } },
    { data: { id: 'e', name: 'Internet', foo: 2, bar: 4, baz: 9 }, position: { x: 130, y: 30 } },
    { data: { id: 'g', name: 'LAN', foo: 2, bar: 4, baz: 9 }, position: { x: 50, y: 40 } },
    { data: { id: 'h', name: 'WAN', foo: 2, bar: 4, baz: 9 }, position: { x: 115, y: 40 } },
	{ data: { id: 'i', name: 'Internal Network', foo: 2, bar: 4, baz: 9 }, position: { x: 85, y: 40 }}
  ], 

  edges: [
    { data: { id: 'dg', weight: 1, source: 'd', target: 'g' } },
    { data: { id: 'ga', weight: 3, source: 'g', target: 'a' } },
    { data: { id: 'ai', weight: 4, source: 'a', target: 'i' } },
    { data: { id: 'ib', weight: 5, source: 'i', target: 'b' } },
    { data: { id: 'bh', weight: 6, source: 'b', target: 'h' } },
    { data: { id: 'he', weight: 2, source: 'h', target: 'e' } },
	{ data: { id: 'gc', weight: 7, source: 'g', target: 'c' } }
  ]
};
 

  var cy = cytoscape({
	
  container: document.getElementById('cy'),
	
  userZoomingEnabled: false,
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
		'background-fit': 'cover',
		'shape': 'roundrect',
		'font-size': 3,
      })
    .selector('edge')
      .css({
        'line-color': '#000000',
        'target-arrow-color': '#61bffc',
		'width': 1,
        'target-arrow-shape': 'triangle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'blue',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      })
	  .selector('.highlighted')
      .css({
        'background-color': '#ff0000',
        'line-color': '#ff0000',
		'line-style': 'dotted',
        'target-arrow-color': '#ff0000',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s',
		'width': '0.5'
      })
	  .selector('.fire')
      .css({
        'background-color': '#00ff00',
        'line-color': '#00ff00',
		'line-style': 'dotted',
        'target-arrow-color': '#00ff00',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s',
		'width': '0.5'
      })
	  .selector('.ce')
      .css({
        'background-image': 'url(http://images.all-free-download.com/images/graphicthumb/network_router_clip_art_25708.jpg)',
		'width': 'mapData(baz, 0, 10, 10, 40)',
        'height': 'mapData(baz, 0, 10, 10, 40)',
		'background-color': '#fff'
      })
	  .selector('.pe')
      .css({
        'background-image': 'url(/horizon/static/dashboard/img/cisco-router-icon.jpg)',
		'width': 10,
        'height': 10,
		'background-color': '#fff'
      })
	  .selector('.lan')
      .css({
        'background-image': 'url(/horizon/static/dashboard/img/Cloud.png)',
		'width': 13,
        'height': 13,
		'background-color': '#fff',
        'text-valign' : 'center',
		'text-halign' : 'center',
		'font-size': 2,
		'text-max-width' : 9,
		'text-wrap' : 'wrap',
      })
	  .selector('.firewall')
      .css({
        'background-image': 'url(/horizon/static/dashboard/img/firewall.jpg)',
		'width': 10,
        'height': 10,
		'background-color': '#fff'
      })
	  .selector('.dhcp')
      .css({
        'background-image': 'url(/horizon/static/dashboard/img/dhcp.png)',
		'width': 10,
        'height': 10,
		'background-color': '#fff'
      })
	  .selector('.host')
      .css({
        'background-image': 'url(/horizon/static/dashboard/img/host.png)',
		'width': 7,
        'height': 5,
		'background-color': '#fff'
      })
	  .selector('.internet')
      .css({
        'background-image': 'url(/horizon/static/dashboard/img/internet.jpg)',
		'width': 7,
        'height': 5,
		'background-color': '#fff'
      }),
  
  elements: elesJson,
  
  layout: {
    name: 'preset',
	directed: true,
	padding: 20,
  },
  
  ready: function(){
    // ready 1
  },
  
    
});

var nod = '<p>hi</p>';

cy.on('select','node',function(e){
	var node = this;
	//showNodeInfo( node );
});

cy.on('unselect', 'node', function(e){
      var node = this;
	  hideNodeInfo();
});

cy.on('select','edge',function(e){
	var edge = this;
	showEdgeInfo( edge );	
});

cy.on('unselect', 'edge', function(e){
      var edge = this;
      hideEdgeInfo();
});

function showNodeInfo( node ){
    
}
  
function hideNodeInfo(){
    $('#info').hide();
}

function showEdgeInfo( edge )
{
	$('#info').html( infoTemplate( edge.data() ) ).show();
}

function hideEdgeInfo(){
    $('#info').hide();
}

var nodess = elesJson.nodes;

function showNodeType( )
{
	for(j=0;j<nodess.length;j++)
	{
		if(nodess[j].data.name == "CE")
			cy.$('#'+nodess[j].data.id).addClass('ce');
		else if(nodess[j].data.name == "LAN")
			cy.$('#'+nodess[j].data.id).addClass('lan');
		else if(nodess[j].data.name == "Internal Network")
			cy.$('#'+nodess[j].data.id).addClass('lan');
		else if(nodess[j].data.name == "WAN")
			cy.$('#'+nodess[j].data.id).addClass('lan');
		else if(nodess[j].data.name == "Firewall")
			cy.$('#'+nodess[j].data.id).addClass('firewall');
		else if(nodess[j].data.name == "DHCP")
			cy.$('#'+nodess[j].data.id).addClass('dhcp');
		else if(nodess[j].data.name == "Host")
			cy.$('#'+nodess[j].data.id).addClass('host');
		else if(nodess[j].data.name == "Internet")
			cy.$('#'+nodess[j].data.id).addClass('internet');
		else
			cy.$('#'+nodess[j].data.id).addClass('pe');
	}
}

showNodeType();

var path = ["dg","ga","ai","ib","bh","he"];
var path2 =["gc"];
var j;
var highlight = function(){
    for(j=0;j<path.length;j++)
    {
      cy.$('#'+path[j]).addClass('highlighted');
	  
    }
	for(j=0;j<path2.length;j++)
	{
		cy.$('#'+path2[j]).addClass('fire');
	}
};
  
highlight();
  
}); // on dom ready
