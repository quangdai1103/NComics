export default defineEventHandler(async (event) => {
    try {
    const src = event.path.split('src=')[1];
      const providers = [ 'nettruyenco.vn'];
      const response = await fetch(src, {
        headers: {
          referer: `https://${providers[Math.floor(Math.random()*providers.length )]}`,
        },
        cache: 'force-cache'
      });
  
      const arrayBuffer = await response.arrayBuffer();
      //@ts-ignore
      const buffer = Buffer.from(arrayBuffer, 'base64');
      return buffer;
    } catch (err) {}
  });