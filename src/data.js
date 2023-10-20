const categories = [
  {
    id: 1,
    name: 'Celulares',
  },
  {
    id: 2,
    name: 'Indumentaria',
  },
  {
    id: 3,
    name: 'Cocina',
  },
];

const products = [
  {
    id: 1,
    categoryId: 1,
    name: 'samsung c23',
    description: '2 gb ram',
    stock: 10,
    price: 80999,
    image: 'https://imgs.search.brave.com/pF20oBafHxoTCrJPwT-R6O8KC9-MQoy8BU39_rORqXs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzEx/NTIzMzkvMTE1OC9p/LzYwMC9kZXBvc2l0/cGhvdG9zXzExNTg5/ODI5LXN0b2NrLXBo/b3RvLWJlYXV0aWZ1/bC1oaWdobHktZGF0/YWlsZWQtYmxhY2st/c21hcnRwaG9uZS5q/cGc'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'samsung s8',
    description: '2 gb ram, 128 gb almacenamiento',
    stock: 5,
    price: 99999,
    image: 'https://imgs.search.brave.com/vlpKLJ_fAIokjdWtvO0bvAvgz6oBWc52KWLlHISIcQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGF2YW5ndWFyZGlh/LmNvbS9hbmRybzRh/bGwvaGVyby8yMDIz/LzA0L2NhbWFyYXMt/dHJhc2VyYXMtc2Ft/c3VuZy1nYWxheHkt/YTM0LmpwZz93aWR0/aD03NjgmYXNwZWN0/X3JhdGlvPTE2Ojkm/Zm9ybWF0PW5vd2Vi/cA'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'samsung x3',
    description: '8 gb ram, 1 tb almacenamiento',
    stock: 1,
    price: 180999,
    image: 'https://imgs.search.brave.com/gKX_Rw1Wzif50aeAyK0Jcf5f6JO6oBKg8TAnpz24bwY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/OTY1NTAwOS9lcy9m/b3RvL2VsZWdpci11/bmEtYXBsaWNhY2kl/QzMlQjNuLWVuLXVu/LXRlbCVDMyVBOWZv/bm8taW50ZWxpZ2Vu/dGUtc2Ftc3VuZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MXlGRDhLMk5BTHB5/b0N1b3Q0NlhxNFpz/RjZWMmZlZGFVMllx/UVJfdklncz0'
  },
  {
    id: 4,
    categoryId: 2,
    name: 'Remera',
    description: 'XL',
    stock: 25,
    price: 2000,
    image: 'https://imgs.search.brave.com/ZlsVEkQmr9714vZkdgduCdsREyFLJ_ag9Mia4lbnzvY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGFmaXRpLmNv/bS5hci9wL3RvcHBl/ci04Nzk1LTA5OTcz/MjEtMS1jYXRhbG9n/LW5ldy5qcGc'
  },
  {
    id: 5,
    categoryId: 2,
    name: 'Remera',
    description: 'L',
    stock: 50,
    price: 2100,
    image: 'https://imgs.search.brave.com/XJG2mqIjwK-gZGxB_UL6X6HRcPuNSMaD0pYRsFyM6Do/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9oYS5jb20uYXIv/cHJvZHVjdG8vJTIw/MS0xMi0yMjQ0LTAx/L21kL01PSF81MzIw/LmpwZw'
  },
  {
    id: 6,
    categoryId: 3,
    name: 'Horno',
    description: '4 hornallas',
    stock: 5,
    price: 350999,
    image: 'https://imgs.search.brave.com/9ZnPAGLICL6QqWG130-OpnksTOX0xyIz6AGw9eB2fIk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXMubXVzaW11bmRv/LmNvbS9tZWRpYXMv/MDAzMTkwNDItMTQw/NzgyLTE0MDc4Mi0w/MS0xNDA3ODItMDEu/anBnLXNpemUzMDA_/Y29udGV4dD1iV0Z6/ZEdWeWZHbHRZV2Rs/YzN3eU1qVTFPSHhw/YldGblpTOXFjR1Zu/Zkdnek9TOW9NREF2/TVRBek9EWXdOakky/TURZek5qWXZNREF6/TVRrd05ESXRNVFF3/TnpneUxURTBNRGM0/TWw4d01TMHhOREEz/T0RKZk1ERXVhbkJu/WDNOcGVtVXpNREI4/WmpreE1qTTRNek0x/T0RsaE5ESXlPR0Uw/WVRaalpqVmpOakE0/TnpCaU16ZzNOR1Ez/TkdJeU4yUTRZemM1/T0dKbU0yVXdZV00z/TkdVeVpqRmpNamxt/T0E'
  },

];

export { categories, products };
