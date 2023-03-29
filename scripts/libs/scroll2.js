const ScrollObserver = (els, cb, options) => {
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    const optionsMerged = Object.assign(defaultOptions, options);
    const once = optionsMerged.once;
  
    const init = () => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cb(entry.target, true);
              if (once) {
                observer.unobserve(entry.target);
              }
            } else {
              cb(entry.target, false);
            }
          });
        }, optionsMerged);
      
        observer.POLL_INTERVAL = 100;
      
        document.querySelectorAll(els).forEach((el) => {
          observer.observe(el);
        });
      };
      
  
    init();
  
    return {
      destroy: () => {
        observer.disconnect();
      },
    };
  };
  
