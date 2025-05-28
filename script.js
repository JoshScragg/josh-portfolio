(function() {
    const searchParams = new URLSearchParams(window.location.search);
    const path = searchParams.get('path');
    
    if (path && window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')) {
      searchParams.delete('path');
      
      const baseUrl = window.location.pathname.replace(/\/$/, '');
      
      if (typeof window.___navigate === 'function') {
        window.___navigate(baseUrl + path + window.location.search);
      } else {
        window.history.replaceState({}, '', baseUrl + path + window.location.search);
        window.location.reload();
      }
    }
  })();