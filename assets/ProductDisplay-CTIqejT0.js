import{u as l,r,S as p,a as m,j as s}from"./index-Bhfv174F.js";import{N as u,c as h}from"./Navbar-Bye5bWHa.js";import{F as x}from"./Footer-DvOzb263.js";const f=()=>{const{productId:i}=l(),{addToCart:c}=r.useContext(p),[d,e]=r.useState(!1),t=parseInt(i),o=m.find(a=>a.id===t),n=a=>{o.qnt>0&&(c(a),e(!0),setTimeout(()=>{e(!1)},3e3))};return r.useEffect(()=>{window.scrollTo(0,0)},[]),s.jsxs("div",{className:"product-display",children:[s.jsx(u,{}),o&&s.jsxs("div",{className:"product-display-info",children:[s.jsxs("div",{className:"item-cima",children:[s.jsx("p",{className:"nome-produto-carrinho",children:o.name}),s.jsx("img",{className:"product-img-display",src:o.img,alt:"Imagem do Produto"})]}),s.jsxs("div",{className:"descricao-produto-carrinho",children:[s.jsxs("div",{className:"precos",children:[s.jsxs("p",{className:"preco-produto-descricao",children:["R$ ",o.new_price]}),s.jsxs("p",{className:"preco-velho-descricao",children:["R$ ",o.old_price]})]}),s.jsxs("p",{className:"qnt-livre",children:["Quantidade Disponíveis:"," ",s.jsx("span",{className:"num-qnt-livre",children:o.qnt})]}),s.jsx("div",{className:`btn-baixo ${o.qnt<=0?"out-of-stock":"in-stock"}`,children:s.jsxs("button",{type:"button",onClick:()=>n(o.id),disabled:o.qnt<=0,children:[o.qnt<=0?"Produto Esgotado":"Adicionar ao Carrinho",s.jsx("img",{className:"img-carrinho-btn",src:h,alt:"imagem carrinho"})]})}),s.jsx("div",{id:"info-product-display",children:s.jsxs("p",{className:"qnt-livre",children:["Cor: ",s.jsx("span",{className:"num-qnt-livre",children:o.color})]})})]}),s.jsx("hr",{className:"hr-produto"}),s.jsxs("p",{id:"description",children:[s.jsx("strong",{children:"Descrição do Produto:"})," ",o.description]})]}),d&&s.jsx("div",{className:"popup",children:s.jsx("p",{children:"Item adicionado ao carrinho!"})}),s.jsx(x,{})]})};export{f as default};
