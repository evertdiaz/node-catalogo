// ================PRODUCTOS
$('#btn-producto-new').on('click', function() {
	var $data = $('#form-new input[type="text"]')
  var cat = $('#form-new select').val()
	var data = $.map($data, obj => obj.value)
		var sendInfo = {
	           nombre: data[0],
	           categoria: cat,
	           img: data[1],
	           descripcion: data[2],
	           precio: data[3],
	           colores: data[4]
	        }
	  console.log(sendInfo)
	  $.post('/api/producto', sendInfo, function(data, textStatus, jqXHR) {
	  	if(textStatus) {
	  		alert('Producto Registrado con Éxito')
	  		location.href = '/admin/productos'
	  	} 
	  		else alert('Error de conexion')

  })
})

$('#btn-producto-edit').on('click', function() {
	var $data = $('#form-edit input[type="text"]')
  	var cat = $('#form-edit select').val()
	var data = $.map($data, obj => obj.value)
	var ID = data[5]
	var link = '/api/producto/'+ID
		var sendInfo = {
	           nombre: data[0],
	           categoria: cat,
	           img: data[1],
	           descripcion: data[2],
	           precio: data[3],
	           colores: data[4]
	        }
	  $.ajax({
	  	url: link,
	  	type: 'PUT',
	  	data: sendInfo,
	  	succes: function(sendInfo) {
	  		alert('Guardado Correctamente')
	  		location.href = '/admin/productos'
	  	}
	  })
})

$('#btn-producto-delete').on('click', function() {
	var $data = $('#form-edit input[type="text"]')
	var data = $.map($data, obj => obj.value)
	var id = data[5]
	var link = '/api/producto/' + id
	$.ajax({
		url: link,
		type: 'DELETE',
		success: function(result) {
			alert('Producto Borrado con éxito!')
			location.href = '/admin/productos'
		}

	})
})


// ============== CATEGORIAS
$('#btn-categoria-new').on('click', function() {
	var $data = $('#form-new input[type="text"]')
	var data = $.map($data, obj => obj.value)
		var sendInfo = {
	           nombre: data[0],
	           descripcion: data[1]
	        }
	  console.log(sendInfo)
	  $.post('/api/categoria', sendInfo, function(data, textStatus, jqXHR) {
	  	if(textStatus) {
	  		alert('Categoria Registrado con Éxito')
	  		location.href = '/admin/categorias'
	  	} 
	  		else alert('Error de conexion')

  })
})

$('#btn-categoria-edit').on('click', function() {
	var $data = $('#form-edit input[type="text"]')
	var data = $.map($data, obj => obj.value)
	var ID = data[2]
	var link = '/api/categoria/'+ID
		var sendInfo = {
	           nombre: data[0],
	           descripcion: data[1]
	        }
	  $.ajax({
	  	url: link,
	  	type: 'PUT',
	  	data: sendInfo,
	  	succes: function(sendInfo) {
	  		alert('Guardado Correctamente')
	  		location.href = '/admin/categorias'
	  	}
	  })
})

$('#btn-categoria-delete').on('click', function() {
	var $data = $('#form-edit input[type="text"]')
	var data = $.map($data, obj => obj.value)
	var ID = data[2]
	var link = '/api/categoria/' + ID
	$.ajax({
		url: link,
		type: 'DELETE',
		success: function(result) {
			alert('Categoria Borrado con éxito!')
			location.href = '/admin/categorias'
		}

	})
})


// ================PROMOCIONES
$('#btn-promocion-new').on('click', function() {
	var $data = $('#form-new input[type="text"]')
  var cat = $('#form-new select').val()
	var data = $.map($data, obj => obj.value)
		var sendInfo = {
	           nombre: data[0],
	           descripcion: data[1],
	           categoria: cat,
	           descuento: data[2]
	        }
	  console.log(sendInfo)
	  $.post('/api/promocion', sendInfo, function(data, textStatus, jqXHR) {
	  	if(textStatus) {
	  		alert('Promocion Registrado con Éxito')
	  		location.href = '/admin/productos'
	  	} 
	  		else alert('Error de conexion')

  })
})

$('#btn-promocion-edit').on('click', function() {
	var $data = $('#form-edit input[type="text"]')
  var cat = $('#form-edit select').val()
	var data = $.map($data, obj => obj.value)
	var ID = data[3]
	var link = '/api/promocion/'+ID
		var sendInfo = {
	           nombre: data[0],
	           descripcion: data[1],
	           categoria: cat,
	           descuento: data[2]
	        }
	  $.ajax({
	  	url: link,
	  	type: 'PUT',
	  	data: sendInfo,
	  	succes: function(sendInfo) {
	  		alert('Guardado Correctamente')
	  		location.href = '/admin/productos'
	  	}
	  })
})

$('#btn-promocion-delete').on('click', function() {
	var $data = $('#form-edit input[type="text"]')
	var data = $.map($data, obj => obj.value)
	var ID = data[3]
	var link = '/api/promocion/' + ID
	$.ajax({
		url: link,
		type: 'DELETE',
		success: function(result) {
			alert('Promocion Borrado con éxito!')
			location.href = '/admin/promociones'
		}

	})
})

// ========= LOGIN
$('#btn-login').click(function() {
	var $data = $('#form-login input')
	var data = $.map($data, obj => obj.value)
	var link = '/api/user/'+ data[0]
	$.get(link, data, function( users ){
		var getUser = users[0]
		if(getUser.password == data[1] && getUser.username == data[0]){
			alert('Bienvenido!')
			location.href='/admin/home'
			}
		else
			alert('Revisa bien tu usuario o contraseña')
	})
	
})