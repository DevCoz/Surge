//Script event auto linked ipv4 nextdns: network-change

$httpClient.get('https://link-ip.nextdns.io/d67543/8adeccb60210ad7e', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});
