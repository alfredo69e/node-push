const express = require("express");
const bodyparser = require("body-parser");
const methodoverride = require("method-override");
const FCM = require('fcm-node');

const app = express();
const router = express.Router();

app.use(bodyparser.json());
app.use(methodoverride());

app.listen(3000, () => {
  console.log('aoperacion exitosa puerto 3000');
});

router.get('/notificaciones', (req, res) => {

      var serverKey = 'AAAA0SIzy1o:APA91bG95pTdbwZD2lepK8FmDO9ARsA0RNzXe5F5r5K5laxhDom3HQpOL5whlJu2c3d4mSO0rp9VHO_wA7WG8k9lLEk0ATWMEVGIWxrOuVsG46PrdltSJ9m3i5jf_kA5I-g2qdgw2zS2'; //put your server key here
      var fcm = new FCM(serverKey);

      var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
          to: 'dX6O1a7856M:APA91bHQqUMk3xC-lTLHlfpR7RZSAXSQblHFrv_qGcEMWAMGNJ-gNqssGL-r7m5LDPMO3qzMJJ8MaY4jdTsevuEVffPphe0qdcLyNPFFCFcoZeOYyPKmFxA0YMUOcHfmTV1JHdkuH6G1',
          collapse_key: '1234alfredo',

          notification: {
              title: 'push noden 2',
              body: 'mensaje node',
              icon: 'fcm_push_icon',
              click_action: 'FCM_PLUGIN_ACTIVITY'
          },

          data: {  //you can send only notification or only data(or include both)
              my_key: 'my value',
              my_another_key: 'my another value'
          }
      };

      fcm.send(message, function(err, response){
             if (err) {
                 console.log("Something has gone wrong!");
             } else {
                 console.log("Successfully sent with response: ", response);
             }
         });

    res.send({ estado: 'operacion exitosa'});
});

app.use(router)
