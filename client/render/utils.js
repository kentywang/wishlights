export default class Utils {
static makeGradientCube(c1, c2, w, d, h, opacity){
	if(typeof opacity === 'undefined')opacity = 1.0;
	if(typeof c1 === 'number') var lighter = new THREE.Color( c1 );
	if(typeof c2 === 'number') var darker = new THREE.Color( c2 );

	var cubeGeometry = new THREE.BoxGeometry(w, h, d);

	var cubeMaterial = new THREE.MeshBasicMaterial({
	    vertexColors:THREE.VertexColors
	    });

	if(opacity < 1.0){
	    cubeMaterial.opacity = opacity;
	    cubeMaterial.transparent = true;
	    }

	const x = parseInt(Utils.colorLuminance('#'+c1.toString(16), 1));
	const y = parseInt(Utils.colorLuminance('#'+c2.toString(16), .5));

	const c1b = new THREE.Color(x);

	const c2t = new THREE.Color(y);

	for(var ix=0;ix<12;++ix){
	    if(ix==4 || ix==5){ //Top edge, all c2
	        cubeGeometry.faces[ix].vertexColors = [c2t,c2t,c2t];
	        }
	    else if(ix==6 || ix==7){ //Bottom edge, all c1
	        cubeGeometry.faces[ix].vertexColors = [c1b,c1b,c1b];
	        }
	    else if(ix%2 ==0){ //First triangle on each side edge
	        cubeGeometry.faces[ix].vertexColors = [darker,lighter,darker];
	        }
	    else{ //Second triangle on each side edge
	        cubeGeometry.faces[ix].vertexColors = [lighter,lighter,darker];
	        }
	    }

	return new THREE.Mesh(cubeGeometry, cubeMaterial);
}

static makeGradientCylinder(c1, c2, w, h, opacity){
	if(typeof opacity === 'undefined')opacity = 1.0;
	if(typeof c1 === 'number') var lighter = new THREE.Color( c1 );
	if(typeof c2 === 'number') var darker = new THREE.Color( c2 );

	var cubeGeometry = new THREE.CylinderGeometry(w + .01, w, h, 16, 1);

	var cubeMaterial = new THREE.MeshBasicMaterial({
	    vertexColors:THREE.VertexColors
	    });

	if(opacity < 1.0){
	    cubeMaterial.opacity = opacity;
	    cubeMaterial.transparent = true;
	}
	
	const x = parseInt(Utils.colorLuminance('#'+c1.toString(16), .5));
	const y = parseInt(Utils.colorLuminance('#'+c2.toString(16), .5));

	const c1b = new THREE.Color(x);
	const c2t = new THREE.Color(y);


	for(var ix=0;ix<64;++ix){
	    if (ix >= 32 && ix < 48) {
	    	cubeGeometry.faces[ix].vertexColors = [darker,darker,c2t];
	    }
	    else if (ix >= 48) {
	    	cubeGeometry.faces[ix].vertexColors = [c1b,c1b,new THREE.Color(0xffffff)];
	    }
	    else if(ix%2 ==0){
	        cubeGeometry.faces[ix].vertexColors = [darker,lighter,darker];
	        }
	    else{
	        cubeGeometry.faces[ix].vertexColors = [lighter,lighter,darker];
	        }
	    }

	return new THREE.Mesh(cubeGeometry, cubeMaterial);
}

static colorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if(hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    
    // convert to decimal and change luminosity
    var rgb = '0x', c, i;
    for(i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ('00' + c).substr(c.length);
    }
    //console.log(rgb);
    return rgb;
}

static getRandCoord (maxDist, onlyTop = -1) {
  const coord = Math.random() * maxDist;
  return Math.random() < .5 ? coord : coord * onlyTop;
}

static randomSign() {
  return Math.random() > .5 ? -1 : 1;
}

static getRandColor () {
    const colors = [
      {light: 0xfcbd3f, dark: 0xdb3b00},  // orange
      {light: 0xFED178, dark: 0xE0842C},  // yellow
      {light: 0xFEB963, dark: 0xED6525},  // light orange
      {light: 0xFEC34D, dark: 0xED6522},  // orange-pink
      {light: 0xFEBF6D, dark: 0xED6554},  // pink
      {light: 0xFEAE77, dark: 0xE14250},  // dark pink
      {light: 0xFEBF68, dark: 0xED6233},  // pink-orange
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
}
}