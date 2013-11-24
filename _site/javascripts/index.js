/**
 * Main JS file for Banquo behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

			// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
			// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

			// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

			// MIT license

			(function() {
			    var lastTime = 0;
			    var vendors = ['ms', 'moz', 'webkit', 'o'];
			    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
			                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
			    }

			    if (!window.requestAnimationFrame)
			        window.requestAnimationFrame = function(callback, element) {
			            var currTime = new Date().getTime();
			            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			              timeToCall);
			            lastTime = currTime + timeToCall;
			            return id;
			        };

			    if (!window.cancelAnimationFrame)
			        window.cancelAnimationFrame = function(id) {
			            clearTimeout(id);
			        };
			}());



			var container, stats;
			var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color;
			var mouseX = 0, mouseY = 0;

			var height = ($('#site-head').height() / 1.5);
			var windowHalfX = $('#site-head').width() / 2;
			var windowHalfY = height / 2;

			init();
			animate();

			function init() {

				container = document.querySelector('#site-head');

				camera = new THREE.PerspectiveCamera( 75, $('#site-head').width() / height, 1, 3000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();
				scene.fog = new THREE.FogExp2( 0x000000, 0.0007 );

				geometry = new THREE.Geometry();

				for ( i = 0; i < 20000; i ++ ) {

					var vertex = new THREE.Vector3();
					vertex.x = Math.random() * 2000 - 1000;
					vertex.y = Math.random() * 2000 - 1000;
					vertex.z = Math.random() * 2000 - 1000;

					geometry.vertices.push( vertex );

				}

				parameters = [
					[ [1, 1, 0.5], 5 ],
					[ [0.95, 1, 0.5], 4 ],
					[ [0.90, 1, 0.5], 3 ],
					[ [0.85, 1, 0.5], 2 ],
					[ [0.80, 1, 0.5], 1 ]
				];

				for ( i = 0; i < parameters.length; i ++ ) {

					color = parameters[i][0];
					var size  = parameters[i][1];

					materials[i] = new THREE.ParticleSystemMaterial( { size: size } );

					particles = new THREE.ParticleSystem( geometry, materials[i] );

					particles.rotation.x = Math.random() * 6;
					particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;

					scene.add( particles );

				}

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( $('#site-head').width(), height);
				renderer.setClearColorHex( 0x000000, 1 );
				container.appendChild( renderer.domElement );
				$('canvas').addClass('three-js');

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = $('#site-head').width() / 2;
				windowHalfY = height / 2;

				camera.aspect = $('#site-head').width() / height;
				camera.updateProjectionMatrix();

				renderer.setSize( $('#site-head').width(), height);

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				var time = Date.now() * 0.00005;

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

				camera.lookAt( scene.position );

				for ( i = 0; i < scene.children.length; i ++ ) {

					var object = scene.children[ i ];

					if ( object instanceof THREE.ParticleSystem ) {

						object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

					}

				}

				for ( i = 0; i < materials.length; i ++ ) {

					color = parameters[i][0];

					h = ( 360 * ( color[0] + time ) % 360 ) / 360;
					materials[i].color.setHSL( h, color[1], color[2] );

				}

				renderer.render( scene, camera );

			}
    });

}(jQuery));