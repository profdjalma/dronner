$(document).ready(function(){

$("#contato").validate({

rules:{
  nome:{
    required:true,
    minlength:3
  },

  email:{
    required:true
  },

  telefone:{
    required:true,
    minlength:11
  },

  duvidas:{
    required:true
  },
},

messages:{
  nome:{
    required:" Esse campo é obrigatório",
  },

  email:{
    required:" Obrigatório o uso da @"
  },

  telefone:{
    required:" No mínimo 11 números"
  },

  duvidas:{
    required:" Esse campo é obrigatório"
  },
}



})
})
