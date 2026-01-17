#!/bin/bash
mkdir -p public/images/recovered

# Hero Image
curl -o public/images/hero_background_new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ9VRRrokNhz3QJL/img_9952-edit-Aq2J3vxGPJFJP54a.jpg"

# Realisations
curl -o public/images/realisation-1-new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=891,fit=crop/YZ9VRRrokNhz3QJL/img_2568-edit-mv0JO7WEZ5Cpy0v1.jpg"
curl -o public/images/realisation-2-new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=761,fit=crop/YZ9VRRrokNhz3QJL/img_0538-edit-Y4LvzJooPLCeDNRl.jpg"
curl -o public/images/realisation-3-new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=618,fit=crop/YZ9VRRrokNhz3QJL/img_6940-edit-A1awZ2D5MKCjbJqQ.jpg"
curl -o public/images/realisation-4-new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=483,fit=crop/YZ9VRRrokNhz3QJL/salleavectentures-dOq8DqV80PUyX1WE.jpg"
curl -o public/images/realisation-5-new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=761,fit=crop/YZ9VRRrokNhz3QJL/img_0530-edit-edit-YZ9jqbbkM5UBXwe7.jpg"
curl -o public/images/realisation-6-new.jpg "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=457,fit=crop/YZ9VRRrokNhz3QJL/img_0466-edit-Awv9xk9RkVHy5rMp.jpg"

# Logo (if we want to grab one, but we have logo-v2.png already, lets keep it unless user wants the one from site which might just be text or svg)
echo "Images downloaded to public/images/"
