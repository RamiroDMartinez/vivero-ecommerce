import React from 'react'

const NavBar = () => {
return (
<div>
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">VIVERO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Suculentas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Plantas de interior</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Plantes de exterior</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jardineria
            </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Herramientas</a></li>
            <li><a class="dropdown-item" href="#">Macetas</a></li>
            <li><a class="dropdown-item" href="#">Productos</a></li>
        </ul>
            </li>
        </ul>
    </div>
    </div>
</nav>
</div>
)
}

export default NavBar
