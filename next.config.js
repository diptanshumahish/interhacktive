/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"img.playbook.com",
                
            }
        ]
    }
}

module.exports = nextConfig
