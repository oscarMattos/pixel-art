var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  $colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $('#indicador-de-color').css('background-color', "'" + $colorActual + "'");
});

// 1 - Elementos del DOM

var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles.cursor-personalizado');
var $grillaDePixeles = $('#grilla-pixeles');

// 2 - Función para generar un elemento DIV con un background-color

function agregarColorPaleta(indexElemento, color) {
  var $divColor = $('<div/>', {
    'class': 'color-paleta',
    'style': 'background-color: ' + color + ";'"
  });
  $paleta.append($divColor);
}

// 3 - Recorrer elementos de la lista de nombreColores con la función .each()

$.each(nombreColores, agregarColorPaleta);

// 4 - Creando pixeles de la grilla

var pixelesDeGrilla = [];

for (var i = 0; pixelesDeGrilla.length < 1750; i++) {
  pixelesDeGrilla[i] = i;
}

function agregarPixelDeGrilla(indexElemento, pixel) {
  var $divPixel = $('<div/>');
  $grillaPixeles.append($divPixel);
}

// 5 - Recorrer elementos de la pixelesDeGrilla con la función .each()

$.each(pixelesDeGrilla, agregarPixelDeGrilla);

// 6 - Función para seleccionar un color de la paleta
//     y reflejarlo en el indicador-de-color

function cambiarColorIndicador() {
  var $backgroundColor = $(this).css('background-color');
  $('#indicador-de-color').css('background-color', $backgroundColor);
  $grillaDePixeles.removeClass('cursor-personalizado-goma');
}

$('.color-paleta').click(cambiarColorIndicador);

// 7 - Función para pintar el pixel de la grilla con el color
//     seleccionado en el indicador-de-color

var $divPixelGrilla = $('#grilla-pixeles.cursor-personalizado div');

function cambiarColorPixel() {
  var $indicadorDeColor = $('#indicador-de-color').css('background-color');
  $(this).css('background-color', "'" + $indicadorDeColor + "'");
}

$divPixelGrilla.click(cambiarColorPixel);

// 8 - Detectá si el botón del mouse está apretado o no

var mouseBotonPresionado;

$divPixelGrilla.mouseup(function() {
  mouseBotonPresionado = false;
});

$divPixelGrilla.mousedown(function() {
  mouseBotonPresionado = true;
});

$divPixelGrilla.mousemove(function(event) {
  if (mouseBotonPresionado) {
    event.target.click(cambiarColorPixel);
  }
});

// 9 - Borrar lienzo de pixeles

var $borrarLienzo = $('#borrar');
var $pixelesParaBorrar = $divPixelGrilla;

function ponerPixelesBlancos() {
  $(this).animate({
    'background-color': 'White'
  }, "fast", "linear");
}

$borrarLienzo.click(function() {
  $.each($pixelesParaBorrar, ponerPixelesBlancos);
});

// 10 - Cargar Superheroe y hacerlo editable

$('img').click(function() {

  var idHeroe = $(this).attr('id');

  switch (idHeroe) {
    case 'batman':
      cargarSuperheroe(batman);

      var $divPixelHeroe = $('#grilla-pixeles.cursorPersonalizado div');
      var $pixelesParaBorrarHeroe = $divPixelHeroe;
      var mouseBotonPresionadoHeroe;

      $divPixelHeroe.click(cambiarColorPixel);

      $divPixelHeroe.mouseup(function() {
        mouseBotonPresionadoHeroe = false;
      })

      $divPixelHeroe.mousedown(function() {
        mouseBotonPresionadoHeroe = true;
      });

      $divPixelHeroe.mousemove(function(event) {
        if (mouseBotonPresionadoHeroe) {
          event.target.click(cambiarColorPixel);
        }
      });

      $borrarLienzo.click(function() {
        $.each($pixelesParaBorrarHeroe, ponerPixelesBlancos);
      });
      break;

    case 'wonder':
      cargarSuperheroe(mujerMaravilla);

      var $divPixelHeroe = $('#grilla-pixeles.cursorPersonalizado div');
      var $pixelesParaBorrarHeroe = $divPixelHeroe;
      var mouseBotonPresionadoHeroe;

      $divPixelHeroe.click(cambiarColorPixel);

      $divPixelHeroe.mouseup(function() {
        mouseBotonPresionadoHeroe = false;
      })

      $divPixelHeroe.mousedown(function() {
        mouseBotonPresionadoHeroe = true;
      });

      $divPixelHeroe.mousemove(function(event) {
        if (mouseBotonPresionadoHeroe) {
          event.target.click(cambiarColorPixel);
        }
      });

      $borrarLienzo.click(function() {
        $.each($pixelesParaBorrarHeroe, ponerPixelesBlancos);
      });
      break;

    case 'flash':
      cargarSuperheroe(flash);

      var $divPixelHeroe = $('#grilla-pixeles.cursorPersonalizado div');
      var $pixelesParaBorrarHeroe = $divPixelHeroe;
      var mouseBotonPresionadoHeroe;

      $divPixelHeroe.click(cambiarColorPixel);

      $divPixelHeroe.mouseup(function() {
        mouseBotonPresionadoHeroe = false;
      })

      $divPixelHeroe.mousedown(function() {
        mouseBotonPresionadoHeroe = true;
      });

      $divPixelHeroe.mousemove(function(event) {
        if (mouseBotonPresionadoHeroe) {
          event.target.click(cambiarColorPixel);
        }
      });

      $borrarLienzo.click(function() {
        $.each($pixelesParaBorrarHeroe, ponerPixelesBlancos);
      });
      break;

    case 'invisible':
      cargarSuperheroe(invisible);

      var $divPixelHeroe = $('#grilla-pixeles.cursorPersonalizado div');
      var $pixelesParaBorrarHeroe = $divPixelHeroe;
      var mouseBotonPresionadoHeroe;

      $divPixelHeroe.click(cambiarColorPixel);

      $divPixelHeroe.mouseup(function() {
        mouseBotonPresionadoHeroe = false;
      })

      $divPixelHeroe.mousedown(function() {
        mouseBotonPresionadoHeroe = true;
      });

      $divPixelHeroe.mousemove(function(event) {
        if (mouseBotonPresionadoHeroe) {
          event.target.click(cambiarColorPixel);
        }
      });

      $borrarLienzo.click(function() {
        $.each($pixelesParaBorrarHeroe, ponerPixelesBlancos);
      });
      break;

    default:
      "Vuelve a intentarlo";
  }

});

// 11 - Guardar imagen en .png

var $botonGuardar = $('#guardar');
$botonGuardar.click(guardarPixelArt);
