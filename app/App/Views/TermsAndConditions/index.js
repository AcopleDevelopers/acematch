import React from 'react'
import PropTypes from 'prop-types'
import Info from 'App/components/Info'

export default class TermsAndConditions extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const {navigation} = this.props
    return (
      <Info
        title="Términos y Condiciones de uso de Ace Match"
        texts={[
          {
            content:
              'Los presentes Términos y Condiciones regulan el acceso de toda persona a la Plataforma y el uso de cualquier Servicio que sea de propiedad, puesto a disposición o sea controlado por Ace Match SpA, una sociedad por acciones regida por las leyes de la República de Chile.'
          },
          {
            content:
              'LEA ESTAS CONDICIONES DETENIDAMENTE ANTES DE ACCEDER O USAR LOS SERVICIOS.',
            subtitle: true
          },
          {
            content:
              'Este documento contiene información legal que le recomendamos leer completa y detenida-mente, en conjunto con la Política de Privacidad de Ace Match, la cual se encuentra disponible en el sitio web www.acematch.cl. Por medio de la aprobación de los presentes Términos y Condiciones, se entiende que el Usuario los ha leído y aceptado en todas sus partes, y entiende que estos le son legalmente vinculantes y obligatorios, estableciendo una relación contractual entre el Usuario y Ace Match. Por tanto, acepta las condiciones de utilización y aprovechamiento de la Plataforma, Contenido y los Servicios. En caso contrario, el Usuario deberá abstenerse de acceder a la Plataforma y Servicios, ya sea directa o indirectamente, y de utilizar cualquier información o servicio provisto por éste.'
          },
          {
            content:
              'Mediante la creación de una Cuenta y/o la utilización en cualquier forma de los Servicios y Plataforma, el Usuario acepta todos los Términos de Uso aquí contenidos y la Política de Privacidad. Asimismo, se entiende que acepta todas las demás reglas de operación, políticas y procedimientos que puedan ser publicados por Ace Match en la Plataforma, cada uno de los cuales se incorpora por referencia.'
          },
          {
            content:
              'Se podrán aplicar condiciones adicionales o suplementarias a determinados Servicios, como políticas para un evento, una actividad o una promoción particular, y dichas condiciones su-plementarias se le comunicarán en relación con los Servicios aplicables. En ese caso, el uso que el Usuario haga de dichos Servicios estará sujeto, además, a los referidos términos y condiciones adicionales, que se incorporan a los presentes Términos de Uso por medio de esta referencia. En caso de que el Usuario no los acepte, deberá abstenerse de utilizar en cualquier forma dichos Servicios. Las condiciones adicionales o suplementarias prevalecerán sobre los Términos y Condiciones en el caso de conflicto entre ellos con respecto a los Servicios aplicables.'
          },
          {
            content:
              'Estos Términos y Condiciones sustituyen expresamente los acuerdos o compromisos pre-vios que hayan podido existir con Usted.'
          },
          {
            content:
              'Ace Match podrá cuando lo considere oportuno, a su sola y absoluta discreción, cambiar por sí y sin aviso previo estos Términos y Condiciones. Estas modificaciones sólo se aplicarán desde el momento en que sean publicados en la Plataforma y regirán para las transacciones que se celebren con posterioridad a su entrada en vigor, sin alterar las transacciones celebradas con anterioridad. Su acceso o uso continuado de los Servicios después de dicha publicación constituye su consentimiento a vincularse por los Términos y Condiciones y sus modificaciones.'
          },
          {
            content:
              'Ace Match podrá poner fin de inmediato a estos Términos y Condiciones o cualquiera de los Servicios respecto de Usted o, en general, dejar de ofrecer o denegar el acceso a los Servicios o cualquier parte de ellos, en cualquier momento y por cualquier motivo.'
          },
          {
            content:
              'Al aceptar estos Términos y Condiciones, el Usuario declara conocer el Reglamento Internacional de Tenis de la Federación Internacional de Tenis y el Reglamento de Ace Match, los cuales norman las reglas del juego y, especialmente el desarrollo de los partidos enlazados entre los miembros de Ace Match. Estos reglamentos se encuentran disponibles en el sitio web www.acematch.cl, siendo responsabilidad del Usuario leer su contenido y muy especialmente, dar cabal cumplimiento a las obligaciones, prohibiciones, normas de orden, conducta y seguridad que estén escritas en ellos, como así también a las disposiciones y pro-cedimientos que en forma posterior se emitan y/o se modifiquen y que se entienden formar parte integral de éstos.'
          },
          {
            content:
              'Lo establecido en el párrafo anterior también será aplicable para los reglamentos de uso general o aquellos relacionados al uso específico de las canchas de tenis dictados por los Clubes o Centros Deportivos en donde se lleven a efecto los partidos entre los Usuarios, debiendo éstos últimos respetarlos y cumplirlos durante toda su estadía en ellos y sobre todo durante el desarrollo de los partidos. Ace Match no será responsable por la aplicación de medidas disciplinarias por parte del Club o Centro Deportivo como consecuencia del incumplimiento de sus normas, por atentados contra la ley, la moral y/o las buenas costumbres y/o atentados contra la integridad física, psíquica o moral de otros Usuarios, socios o empleados del Club, incluyendo aquellos contra la propiedad de éstos.'
          },
          {
            content:
              'Ace Match se reserva el derecho de modificar, complementar o dejar sin efecto, alguna o todas las disposiciones contenidas en los presentes Términos y Condiciones, en cualquier momento.'
          },
          {content: '1. DEFINICIONES.', subtitle: true},
          {
            content:
              'Los términos cuya primera letra figura en mayúscula (salvo cuando se deba exclusivamente a que inician una oración o se trate de un nombre propio), tienen el significado que se les asigna a continuación, o el que se les asigne expresamente en estos Términos y Condiciones de Uso o en la Política de Privacidad:'
          },
          {content: 'Ace Match significa Ace Match SpA.'},
          {
            content:
              'Club(es) o Centro(s) Deportivo(s) significa el lugar en donde se desarrollarán los partidos de tenis entre los Usuarios o Miembros.'
          },
          {
            content:
              'Contenido significa todo tipo de información, ya sea gráfica o escrita, imágenes, audio y video, incluyendo pero no limitándose a la ubicación, anuncios, comentarios, noticias, datos, guiones, gráficos, dibujos o imágenes, textos, diseño, esquemas, mapas y características interactivas presentadas por Ace Match en la Plataforma (y cualquier software y códigos in-formáticos subyacentes), así como también programas o algoritmos computacionales, módulos de programación, manuales de operación, sea que dicho Contenido es generado, provisto o de cualquier otra forma producido o suministrado por Ace Match, los Usuarios o terceros.'
          },
          {
            content:
              'Contenido o Material de Usuarios significa toda clase de fotografías, videos, comentarios, comunicaciones u otros contenidos generado por Usuarios, que hayan sido subidos o cargados a la Plataforma.'
          },
          {
            content:
              'Cuenta significa el perfil personal creado por cada Usuario que acredita el registro en la Plataforma, en base a la información personal proveída por el mismo a Ace Match, la cual incluye su nombre, apellidos, cédula de identidad, fecha de nacimiento, dirección, teléfono, nombre de usuario, correo electrónico, contraseña y un método válido de pago.'
          },
          {
            content:
              'Equipo(s) significa los teléfonos móviles y smartphones, tablets, computadores y cualquier otro aparato electrónico o tecnológico con conexión a Internet por el cual se pueda acceder a la Plataforma.'
          },
          {
            content:
              'Forma de pago significa el medio de pago actual, válido y aceptado utilizado por el Usuario para pagar la Membresía o Suscripción elegida, el cual puede consistir en tarjeta de crédito, débito u otro sistema aceptado.'
          },
          {
            content:
              'Plataforma significa el sitio web, aplicaciones móviles y plataforma operada por Ace Match, por los cuales los Usuarios podrán acceder a los Servicios.'
          },
          {
            content:
              'Política de Privacidad significa las políticas de privacidad de Ace Match, las cuales se encuentran debidamente publicadas en la Plataforma.'
          },
          {
            content:
              'Servicio(s) significa todos los servicios ofrecidos por medio de la Plataforma, así como los demás servicios provistos por Ace Match, a los cuales los Usuarios pueden acceder por medio de la Plataforma y sus Equipos.'
          },
          {
            content:
              'Términos y Condiciones, Términos de Uso o Acuerdo significa los presentes Términos y Condiciones de Ace Match.'
          },
          {
            content:
              'Usuario(s) o Miembro(s) significa toda persona natural que utilice o que se encuentra registrado como tal en la Plataforma.'
          },
          {content: '2. LOS SERVICIOS.', subtitle: true},
          {
            content:
              'Ace Match brinda un servicio de suscripción que permite a sus Usuarios o Miembros encontrar jugadores de tenis de su misma categoría o nivel en una zona geográfica determinada para disputar partidos individuales o singles en los Clubes o Centros Deportivos previamente designados o determinados mediante una Plataforma, a través de uno o varios Equipos. A no ser que Ace Match lo acepte mediante un contrato separado por escrito con Usted, los Servicios se ponen a disposición solo para su uso personal y no comercial.'
          },
          {
            content:
              'Los presentes Términos de Uso rigen la utilización que haga de nuestros Servicios. Según se utilice en estos Términos de Uso, las frases “el servicio de Ace Match”, “nuestro servicio” o “el servicio” se refieren al servicio brindado por Ace Match para enlazar o coordinar los partidos, incluidas todas las características y funcionalidades, recomendaciones y críticas, el sitio web y las interfaces de usuario, además de todo el contenido y software asociado a nuestro servicio.'
          },
          {
            content:
              'Sujeto al cumplimiento de estos Términos y Condiciones, Ace Match le otorga una licencia limitada, no exclusiva, no sublicenciable, revocable, no transferible para: (i) el acceso y uso de las Aplicaciones en su dispositivo personal solo en relación con el uso de los Servicios; y (ii) el acceso y uso de cualquier contenido, información y material relacionado que pueda ponerse a disposición a través de los Servicios, en cada caso solo para su uso personal, no comercial. Ace Match y sus licenciantes se reservan cualquier derecho que no haya sido expresamente otorgado por el presente.'
          },
          {
            content:
              'Usted no podrá: (i) retirar cualquier nota de derechos de autor, marca registrada u otra nota de propiedad de cualquier parte de los Servicios; (ii) reproducir, modificar, preparar obras derivadas sobre los Servicios, distribuir, licenciar, arrendar, revender, transferir, exhibir públicamente, presentar públicamente, transmitir, retransmitir o explotar de otra forma los Servicios, excepto como se permita expresamente por Ace Match; (iii) descompilar, realizar ingeniería inversa o desmontar los Servicios, excepto como se permita por la ley aplicable; (iv) enlazar, reflejar o enmarcar cualquier parte de los Servicios; (v) causar o lanzar cualquier programa o script con el objeto de extraer, indexar, analizar o de otro modo realizar prospección de datos de cualquier parte de los Servicios o sobrecargar o bloquear indebidamente la operación y/o funcionalidad de cualquier aspecto de los Servicios; o (vi) intentar obtener un acceso no autorizado o dañar cualquier aspecto de los Servicios o sus sistemas o redes relacionados.'
          },
          {
            content:
              'Los Servicios y todos los derechos relativos a estos son y permanecerán de propiedad de Ace Match o de sus licenciantes. Ninguna de estos Términos y Condiciones ni su uso de los Servicios le transfieren u otorgan ningún derecho: (i) sobre o en relación con los Servicios, excepto en cuanto a la licencia limitada otorgada anteriormente; o bien (ii) a utilizar o mencionar en cualquier modo a los nombres de empresa, logotipos, nombres de producto y servicio, marcas comerciales o marcas de servicio de Ace Match o de sus licenciantes.'
          },
          {
            content:
              'El software de Ace Match es desarrollado por Ace Match o a pedido de Ace Match, y fue diseñado para permitir la ejecución de los Servicios a través de los Equipos. El software de Ace Match puede variar según el dispositivo y el medio, y la funcionalidad y las funciones también pueden variar de un dispositivo a otro. Usted reconoce que el uso del Servicio puede requerir software de terceros que esté sujeto a licencias de terceros. Usted acepta que puede recibir automáticamente versiones actualizadas del software de Ace Match o de terceros relacionados.'
          },
          {content: '3. CUENTAS DE USUARIO.', subtitle: true},
          {
            content:
              'Con el fin de usar la mayor parte de los aspectos de los Servicios, usted debe registrarse y mantener activa una cuenta personal de usuario de los Servicios. Se podrá crear una sola cuenta por persona y quien crea un Usuario es la única persona autorizada para el acceso a la Plataforma por intermedio de dicho Usuario. Para obtener una Cuenta debe tener como mínimo 18 años de edad.'
          },
          {
            content:
              'El registro de la cuenta le requiere que comunique a Ace Match determinada información personal, como su nombre, dirección, número de teléfono móvil, así como una Forma de pago válida. Usted se compromete a mantener la información en su Cuenta de forma exacta, completa y actualizada. Si no mantiene la información exacta, completa y actualizada, incluso el tener un Método de pago inválido o que haya vencido, podrá resultar en la imposibilidad para acceder y utilizar los Servicios, o incluso en su cancelación.'
          },
          {
            content:
              'El Usuario es responsable de mantener la confidencialidad de cualquier contraseña o número de cuenta proporcionado por el Usuario o Ace Match para acceder a la Plataforma. Cada Usuario es el único y absoluto responsable de todas las actividades que ocurran bajo su contraseña o cuenta. Ace Match no tiene control sobre el uso de la cuenta de un Usuario y renuncia expresamente a cualquier responsabilidad derivada de la misma. En caso de que un Usuario sospeche que un tercero pudiera estar accediendo a la plataforma bajo su cuenta de Usuario o utilizando su contraseña, deberá notificar a Ace Match inmediatamente.'
          },
          {
            content:
              'El Miembro que creó la cuenta de Ace Match y al que se le facturarán los cargos a través de su Forma de pago tiene acceso y control sobre la cuenta de Ace Match y sobre los dispositivos listos para Ace Match que se usan para acceder a nuestro Servicio. Para mantener el control sobre la Cuenta y evitar que alguien acceda a ella (que incluiría información sobre el historial de visualización de la cuenta), el titular de la Cuenta debe mantener el control sobre los dispositivos listos para Ace Match que se utilizan para acceder al Servicio y no revelar a nadie la contraseña ni los detalles de la Forma de pago asociada con la cuenta.'
          },
          {
            content:
              'El Servicio no está disponible para el uso de personas menores de 18 años. Usted no podrá autorizar a terceros a utilizar su Cuenta. No podrá ceder o transferir de otro modo su Cuenta a cualquier otra persona o entidad. Usted acuerda cumplir con todas las leyes aplicables al utilizar los Servicios y solo podrá utilizar los Servicios con fines legítimos. En el uso de los Servicios, no causará estorbos, molestias, incomodidades o daños a la propiedad, a los jugadores ni al personal de Ace Match, como a cualquier otra parte. En algunos casos, se le podrá requerir que facilite un documento de identidad u otro elemento de verificación de identidad para el acceso o uso de los Servicios, y usted acepta que se le podrá denegar el acceso o uso de los Servicios si se niega a facilitar el documento de identidad o el elemento de verificación de identidad.'
          },
          {
            content:
              'Al crear una Cuenta, Usted acepta que Ace Match o terceros le puedan enviar mails o mensajes de texto informativos (SMS) como parte de la actividad comercial normal de su uso de los Servicios. Usted podrá solicitar la no recepción de mensajes de texto informativos (SMS) de Ace Match en cualquier momento enviando un correo electrónico a contacto@acematch.cl indicando que no desea recibir más dichos mensajes, junto con el número de teléfono del dispositivo móvil que recibe los mensajes. Usted reconoce que solicitar la no recepción de mensajes de texto informativos (SMS) podrá afectar al uso que usted haga de los Servicios.'
          },
          {content: '4. ACCESO A LA RED Y DISPOSITIVOS.', subtitle: true},
          {
            content:
              'Usted es responsable de obtener el acceso a la red de datos necesario para utilizar los Servicios. Podrán aplicarse las tarifas y tasas de datos y mensajes de su red móvil si Usted accede o utiliza los Servicios desde un dispositivo inalámbrico, siendo responsable del pago de dichas tarifas y tasas. Usted es responsable de adquirir y actualizar el software o hardware compatible o los dispositivos necesarios para acceder y utilizar los Servicios y Aplicaciones y cualquier actualización de estos. Ace Match no garantiza que los Servicios, o cualquier parte de estos, funcionen en cualquier hardware o dispositivo particular. Además, los Servicios podrán ser objeto de disfunciones o retrasos inherentes al uso de Internet y de las comunicaciones electrónicas.'
          },
          {
            content:
              '5. CONTENIDO O MATERIAL GENERADO O PROPORCIONADO POR EL USUARIO.',
            subtitle: true
          },
          {
            content:
              'Ace Match podrá, a su sola discreción, permitirle cuando considere oportuno, que envíe, cargue, suba, publique o de otro modo ponga a disposición de Ace Match, a través de la Plataforma o de los Servicios, contenido e información de texto, audio y/o visual, incluidos comentarios y opiniones relativos a los Servicios, iniciación de peticiones de apoyo, así como presentación de admisiones para competiciones y promociones. En dicho caso, esta información será considerada en todo momento como no confidencial.'
          },
          {
            content:
              'Usted declara y garantiza que: (i) es el único y exclusivo propietario de todo el Contenido de Usuario o que tiene todos los derechos, licencias, consentimientos y permisos necesarios para otorgar a Ace Match la licencia al Contenido de usuario como establecido anteriormente; (ii) ni el Contenido de Usuario ni su presentación, carga, publicación o puesta a disposición de otro modo de dicho Contenido de Usuario, ni el uso por parte de Ace Match del Contenido de Usuario como está aquí permitido, infringirán, malversarán o violarán la propiedad intelectual o los derechos de propiedad de un tercero o los derechos de publicidad o privacidad o resultarán en la violación de cualquier ley o reglamento aplicable; (iii) no dañará la reputación de Ace Match o cualquier tercero; y (iv) no se hará pasar por otra persona. Ace Match se reserva el derecho de eliminar cualquier Material de Usuario a su entera discreción y sin previo aviso ni responsabilidad hacia el Usuario o cualquier otra persona.'
          },
          {
            content:
              'Todo Contenido o Material facilitado por Usted seguirá siendo de su propiedad. No obstante, al proporcionar Contenido de usuario a Ace Match, usted otorga una licencia mundial, perpetua, irrevocable, transferible, libre de regalías, con derecho a sublicenciar, usar, copiar, modificar, crear obras derivadas, distribuir, exhibir públicamente, presentar públicamente o de otro modo explotar de cualquier manera dicho Contenido de usuario en todos los formatos y canales de distribución, conocidos ahora o ideados en un futuro (incluidos en relación con los Servicios y el negocio de Ace Match y en sitios y servicios de terceros), sin más aviso o consentimiento de usted y sin requerirse el pago a usted o a cualquier otra persona o entidad.'
          },
          {
            content:
              'El Usuario otorga a cada Usuario una licencia no exclusiva para acceder a su Material de Usuario a través de la Plataforma y de mostrar y representar públicamente dicho Material de Usuario, en virtud de estos Términos y Condiciones.'
          },
          {
            content:
              'Usted acuerda no proporcionar Contenido de usuario que sea difamatorio, calumnioso, odioso, violento, racista, obsceno, pornográfico, inadecuado, ilícito o de otro modo ofensivo, como determine Ace Match, a su sola discreción, tanto si dicho material pueda estar protegido o no por la ley. Ace Match podrá, a su sola discreción y en cualquier momento y por cualquier motivo, sin avisarle previamente, revisar, controlar o eliminar Contenido de Usuario, pero sin estar obligada a ello.'
          },
          {
            content:
              'Ace Match no avala ni apoya ninguna clase de Material de Usuario, recomendación o consejo en la misma, renunciando el Usuario a seguir cualquier clase de responsabilidad de Ace Match con relación a cualquier Material de Usuario. El Usuario entiende y acepta que el Material de Usuario puede contener información que es inexacta u ofensiva, renunciando, desde ya, a reclamar o presentar cualquier clase de recurso en contra Ace Match con respecto a la misma.'
          },
          {
            content:
              'Ace Match puede proporcionar enlaces a sitios web pertenecientes o gestionados por terceros, sin que por este hecho pueda entenderse, bajo ninguna circunstancia, que Ace Match respalda el contenido, productos o servicios disponibles en dichos sitios web, y que no es responsable de su contenido o su seguridad. El enlace o conexión del Usuario a cualquier otro sitio web es de su exclusiva responsabilidad.'
          },
          {content: '6. MEMBRESÍAS Y FACTURACIÓN.', subtitle: true},
          {
            content:
              'Ace Match cuenta con dos tipos de membresías: Básica y Premium. La Membresía Básica permite que el Usuario pueda jugar 2 (dos) partidos individuales o singles durante un mes calendario por la suma total de $25.000 (veinticinco mil pesos), mientras que la Membresía Premium le permite jugar 4 (cuatro) partidos individuales o singles durante un mes calendario por el monto total de $40.000 (cuarenta mil pesos). Las membresías de Ace Match serán mensuales, por lo tanto, continuarán mes a mes hasta que sea cancelada. Para usar el Servicio de Ace Match, debe tener acceso a Internet y un dispositivo adecuado, y proporcionar una Forma de pago, según se señaló a propósito de las Cuentas de Usuario.'
          },
          {
            content:
              'Los cargos de membresía por el Servicio de Ace Match y cualquier otro cargo en el que incurra en relación con el uso que haga del Servicio de Ace Match, como impuestos y posibles gastos de transacción, se cobrarán mensualmente a su Forma de Pago en el día calendario correspondiente al comienzo de la porción de pago de su membresía. En ciertos casos, su fecha de pago podría cambiar, por ejemplo, si su Forma de pago no se estableció satisfactoriamente o si su membresía comenzó un día que no está incluido en un determinado mes. Para más información visite el detalle de facturación en su cuenta para ver su próxima fecha de pago.'
          },
          {
            content:
              'Puede cambiar su Forma de pago en su Cuenta. Si el pago no se pudiera hacer satisfactoriamente, debido a caducidad, fecha de vencimiento, invalidez, falta de fondos o si Usted no modifica la información de su Forma de pago o cancela su cuenta, Ace Match podrá suspender su acceso al Servicio hasta que obtenga una Forma de pago válida o podrá cobrarle a través de un método de pago secundario indicado en su Cuenta, si estuviera disponible, lo que Usted acepta expresamente. Al actualizar su Forma de pago, Usted autoriza a Ace Match a continuar cobrando a través de la Forma de pago actualizada, siendo responsable de los importes no cobrados. Esto podría resultar en un cambio en las fechas de cobro. Para algunas Formas de pago, el emisor puede cobrarle ciertos cargos, como cargos de transacción extranjera u otros cargos relacionados con el procesamiento de su Forma de pago. Los impuestos locales varían en función de la Forma de pago usada. Consulte con el proveedor de servicios de su Forma de pago para obtener información. Efectuado el pago, Ace Match le enviará un recibo al correo electrónico indicado en su Cuenta.'
          },
          {
            content:
              'A menos que cancele su membresía antes de la fecha de facturación mensual, nos autoriza a cobrarle la membresía del próximo mes a su Forma de pago. Podrá encontrar los detalles específicos sobre su membresía de Ace Match visitando nuestro sitio web y haciendo clic en el vínculo "Tu Cuenta", disponible en la parte superior de cualquier página del sitio web de Ace Match.'
          },
          {
            content:
              'Ace Match podrá, cuando lo considere oportuno y dependiendo del tipo de membresía, proporcionar a los usuarios beneficios, ofertas promocionales y descuentos que pueden o no resultar en el cobro de diferentes importes por estos o similares servicios o bienes obtenidos a través del uso de los Servicios, y usted acepta que dichos beneficios, ofertas promocionales y descuentos, a menos que también se pongan a su disposición, no se tendrán en cuenta en el uso por su parte de los Servicios o los Cargos aplicados a Usted.'
          },
          {content: '7. CANCELACIÓN Y TERMINACIÓN.', subtitle: true},
          {
            content:
              'Usted puede cancelar su membresía en cualquier momento, y continuará teniendo acceso al Servicio hasta el final del ciclo de facturación mensual. En la medida permitida por la ley aplicable, los pagos no son reembolsables y no se otorgarán reembolsos ni créditos por los períodos de membresía utilizados parcialmente o por los partidos no disputados. Para cancelar, visite la página "Ajustes" y siga las instrucciones. Si cancela su membresía, su cuenta se cerrará automáticamente al final de su facturación mensual actual. Para ver cuándo se cerrará su cuenta, haga clic en "Detalles de facturación" en la página "Ajustes". Si se suscribió a Ace Match mediante su Cuenta con un tercero como Forma de pago y desea cancelar su membresía de Ace Match en cualquier momento, es posible que tenga que hacerlo a través de dicho tercero, ya sea, al visitar su Cuenta con el tercero correspondiente para desactivar su renovación automática o al cancelar la suscripción al Servicio de Ace Match a través de ese tercero. También podrá encontrar información de sobre la facturación de su membresía de Ace Match, si visita su Cuenta con el tercero correspondiente.'
          },
          {
            content:
              'Ace Match puede cambiar sus membresías o suscripciones y su precio de vez en cuando. Sin embargo, cualquier cambio en los precios o en sus planes de Servicio se aplicará a Usted no antes de los 30 (treinta) días siguientes a la notificación.'
          },
          {
            content:
              'Finalmente, Ace Match, a su sola discreción, puede modificar o interrumpir la Plataforma, o puede modificar, suspender o interrumpir su acceso o el soporte, por cualquier razón, con o sin previo aviso y sin ninguna responsabilidad frente a los Usuarios o cualquier tercero. Aun cuando un Usuario pierda el derecho a utilizar la Plataforma, los presentes Términos y Condiciones serán ejecutables.'
          },
          {
            content:
              'Según lo indicado precedentemente, el Usuario podrá terminar estos Términos y Condiciones en cualquier momento, dejando de utilizar la Plataforma, sobreviviendo todas las disposiciones que por su naturaleza debieran sobrevivir para surtir efecto, especialmente en lo que se refiere a los pagos.'
          },
          {
            content:
              'La terminación de los Servicios y/o el cierre de la cuenta del Usuario, por cualquier causa, no generará compensación ni indemnización en su favor por parte de Ace Match.'
          },
          {content: '8. RENUNCIA.', subtitle: true},
          {
            content:
              'El uso de Ace Match es bajo el propio riesgo del Usuario. Los Servicios se proporcionan “tal cual” son ofrecidos y “como disponibles”, sin garantías o declaraciones de ningún tipo, explícita o implícita, incluyendo, pero no limitada a, las garantías de comerciabilidad, idoneidad para un fin particular, y no infracción o violación. Además, Ace Match no hace declaración ni efectúa ninguna clase de representación o garantía alguna relativa a la exactitud, fiabilidad, puntualidad, calidad, idoneidad o disponibilidad de los Servicios prestados a través de la Plataforma de Ace Match, o que los dicha Plataforma funcionará sin interrupciones, libre de errores o libre de virus u otros productos peligrosos. Si el uso de la Plataforma deriva en la necesidad de servicio técnico o reemplazo de equipo o datos, Ace Match no será responsable de dichos costos.'
          },
          {
            content:
              'Ace Match, en la medida máxima permitida por la ley, renuncia a toda garantía, explícita o implícita, incluyendo sin limitación las garantías de comercialización, no violación de derechos de terceros y la garantía de idoneidad para un propósito particular. Ace Match no garantiza, en ninguna circunstancia, la exactitud, confiabilidad, exhaustividad y actualidad de los contenidos, servicios, soporte, software, textos, gráficos o vínculos. Ace Match y sus filiales y proveedores de licencias no garantiza, en ninguna circunstancia, que la información personal suministrada por el Usuario pueda ser objeto de apropiación indebida, interceptada, borrada, destruida o usada por terceros.'
          },
          {
            content:
              'Ace Match no asume ninguna responsabilidad derivada de errores o imprecisiones del Contenido; lesiones personales o daños a la propiedad, de cualquier naturaleza, como resultado de su acceso y uso de la Plataforma; acceso no autorizado o uso de servidores seguros de Ace Match y/o cualquier información personal y/o financiera almacenada en ellos; etc. En consecuencia, Usted acuerda que todo riesgo derivado del uso de los Servicios y cualquier servicio o bien solicitado en relación con aquellos será únicamente suyo, en la máxima medida permitida por la ley aplicable.'
          },
          {
            content:
              'Ace Match no garantiza la calidad, idoneidad, puntualidad, seguridad o habilidad de los terceros proveedores, especialmente de los Clubes o Centros Deportivos que proporcionarán las canchas en donde se desarrollarán los partidos.'
          },
          {content: '9. LIMITACIÓN DE RESPONSABILIDAD.', subtitle: true},
          {
            content:
              'El Usuario acepta que Ace Match no será responsable de daños directos, indirectos, incidentales, especiales, ejemplares, punitivos o emergentes, incluidos el lucro cesante, el daño emergente, el daño moral, la pérdida de datos, la lesión personal o el daño a la propiedad, ni de perjuicios relativos, o en relación con, o de otro modo derivados de cualquier uso de los Servicios, incluso aunque Ace Match haya sido advertido de la posibilidad de dichos daños. Ace Match no será responsable de cualquier daño, responsabilidad o pérdida en relación o que deriven de: (i) el uso de la plataforma; (ii) el uso o dependencia de los Servicios o su incapacidad para acceder o utilizar los Servicios; (iii) en relación con el rendimiento o navegación en la Plataforma o sus enlaces a otros sitios web, incluso si Ace Match ha sido informado de la posibilidad de tales daños; (iv) la mala calidad de las canchas proporcionadas por los Clubes o Centros Deportivos; (v) la interrupción, suspensión o terminación de los Servicios, aun cuando dicha interrupción, suspensión o terminación estuviera o no justificada; (vi) cualquier transacción o relación entre usted y cualquier tercero proveedor, aunque Ace Match hubiera sido advertido de la posibilidad de dichos daños. Ace Match no será responsable del retraso o de la falta de ejecución resultante de causas que vayan más allá del control razonable de Ace Match. En ningún caso la responsabilidad total de Ace Match hacia usted por cualquier clase de pérdidas o daños podrá exceder los montos pagados por usted a Ace Match.'
          },
          {
            content:
              'Las limitaciones y la renuncia en este apartado no pretenden limitar la responsabilidad o alterar sus derechos como consumidor que no puedan excluirse según la ley aplicable.'
          },
          {content: '10. INDEMNIDAD.', subtitle: true},
          {
            content:
              'Usted acuerda mantener indemnes y responder frente a Ace Match y sus directores, empleados y agentes por cualquier reclamación, demanda, pérdida, responsabilidad y gasto (incluidos los honorarios de abogados) que deriven de (l): (i) uso de los Servicios o bienes obtenidos a través de su uso de los Servicios; (ii) incumplimiento o violación de cualquiera de estas Condiciones; (iii) uso por parte de Ace Match de su Contenido de Usuario; o (iv) la infracción de los derechos de cualquier tercero.'
          },
          {content: '11. RESOLUCIÓN DE CONFLICTOS.', subtitle: true},
          {
            content:
              'Cualquier dificultad o controversia que se produzca entre los contratantes respecto de la aplicación, interpretación, duración, validez o ejecución de estos Términos y Condiciones será sometida a arbitraje, conforme al Reglamento Procesal de Arbitraje del Centro de Arbitraje y Mediación de Santiago, vigente al momento de solicitarlo.'
          },
          {
            content:
              'Las partes confieren poder especial irrevocable a la Cámara de Comercio de Santiago A.G., para que, a petición escrita de cualquiera de ellas, designe a un árbitro arbitrador de entre los integrantes del cuerpo arbitral del Centro de Arbitraje y Mediación de Santiago.'
          },
          {
            content:
              'En contra de las resoluciones del arbitrador no procederá recurso alguno, renunciando las partes expresamente a ellos. El árbitro queda especialmente facultado para resolver todo asunto relacionado con su competencia y/o jurisdicción.'
          },
          {content: '12. LEY APLICABLE Y DIVISIBILIDAD.', subtitle: true},
          {
            content:
              'Estos Términos y Condiciones estarán regidos por las leyes de la República de Chile. Los Términos de Uso y la Política de Privacidad constituyen el acuerdo completo entre el Usuario y Ace Match con respecto a los Servicios, uso de la Plataforma y del Contenido, y sustituyen todas las comunicaciones y propuestas previas o contemporáneas (ya sean escritas, orales o electrónicas) entre el Usuario y Ace Match con respecto a la Plataforma y a los Servicios.'
          },
          {content: '13. OTRAS DISPOSICIONES.', subtitle: true},
          {
            content:
              'Las reclamaciones por infracción de derechos de autor deberán enviarse al agente designado de Ace Match. Visite la página web acematch.cl para obtener las direcciones designadas e información adicional. Ace Match podrá notificar por medio de una notificación general en los Servicios, mediante un correo electrónico enviado a su dirección electrónica en su Cuenta o por comunicación escrita enviada a su dirección, según lo dispuesto en su Cuenta. Usted podrá notificar a Ace Match por comunicación escrita a la dirección de Ace Match en contacto@acematch.cl.'
          },
          {
            content:
              'Estos Términos y Condiciones son personales, por lo que no pueden cederse, transferirse ni sub licenciarse, en todo o en parte, sin el consentimiento previo por escrito de Ace Match. Usted da su aprobación a Ace Match para ceder o transferir estos Términos y Condiciones, en todo o en parte, incluido a: (i) una subsidiaria o un afiliado; (ii) un adquirente del capital, del negocio o de los activos de Ace Match; o (iii) un sucesor por fusión. No existe entre Usted, Ace Match o una empresa conjunta o relación de socios, empleo o agencia como resultado del contrato entre Usted y Ace Match o del uso de los Servicios.'
          },
          {
            content:
              'Si cualquier disposición de estos Términos y Condiciones se considerara ilegal, nula o inexigible, ya sea en su totalidad o en parte, de conformidad con la legislación, dicha disposición o parte de esta se considerará que no forma parte de estos Términos y Condiciones, aunque la legalidad, validez y exigibilidad del resto de las disposiciones de estos Términos y Condiciones no se verá afectada. En ese caso, las partes deberán reemplazar dicha disposición ilegal, nula o inexigible, en todo o en parte por una disposición legal, válida y exigible que tenga, en la medida de lo posible, un efecto similar al que tenía la disposición ilegal, nula o inexigible, dados los contenidos y el propósito de estos Términos y Condiciones.'
          },
          {
            content:
              'Estos Términos y Condiciones constituyen el contrato íntegro y el entendimiento entre las partes en relación con el objeto y sustituye y reemplaza a todos los contratos o acuerdos anteriores o contemporáneos en relación con dicho objeto. En estos Términos y Condiciones, las palabras “incluido/a/os/as” e “incluye/n” significan “incluido, de forma meramente enunciativa”. Si el Usuario tiene alguna duda respecto de los Términos y Condiciones, Política de Privacidad, uso de la Plataforma o de su Perfil, podrá ponerse en contacto con Ace Match vía el correo electrónico contacto@acematch.cl. Los mensajes serán atendidos a la mayor brevedad posible.'
          }
        ]}
        buttons={[{text: 'Atrás', onPress: () => navigation.goBack()}]}
      />
    )
  }
}
