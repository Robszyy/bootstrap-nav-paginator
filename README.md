# Bootstrap Nav Paginator
Extra light plug-in for Bootstrap's nav component. Made to improve users experience when dealing with high-sized navigation.

![Demo](https://github.com/Robszyy/bootstrap-nav-paginator/blob/master/examples/ressources/demo.gif)

# Dependencies
 - Bootstrap 3.3 or higher

# Installation
You can download the plug-in [here](https://github.com/Robszyy/bootstrap-nav-paginator/releases/tag/1.0.0), or include the file from the [CDN](https://cdn.jsdelivr.net/gh/Robszyy/bootstrap-nav-paginator@1.0.0/js/).

*Which file to include ?*
> Bootstrap ☞ bootstrap-nav-paginator.js or bootstrap-nav-paginator.min.js
> 
> Bootstrap + JQuery ☞ bootstrap-nav-paginator.jquery.js or bootstrap-nav-paginator.jquery.min.js
> 


# Usage
### Using CSS
Add the class ``nav-paginator`` to your nav component.
Be sure to also specify the number of items per page ``data-paginator-item-count`` and optionally, the class given to navigation's buttons ``data-paginator-buttons-class``.

```
<ul class="nav nav-pills nav-fill nav-paginator" data-paginator-item-count="5" data-paginator-buttons-class="nav-link">
    ...
</ul>
```

### Using JS

```
<script>
     //Init with 5 items per page & the class "nav-link" for navigation's buttons
     document.querySelector("#nav-tabs").BsNavPaginator(5, "nav-link");
</script>
```

### Using JQuery

```
<script>
     //Init with 5 items per page & the class "nav-link" for navigation's buttons
     $("#nav-tabs").BsNavPaginator(5, "nav-link");
</script>
```

# Examples
You can check for examples [here](https://github.com/Robszyy/bootstrap-nav-paginator/tree/1.0.0/examples).

# Licence
Bootstrap Nav Paginator is released under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact (specifically the comment block which starts with /*!).
