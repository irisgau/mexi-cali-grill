const MAILTO = "mailto:24mexi.cali@gmail.com?subject=Catering%20Inquiry&body=Hi%20Mexi-Cali%20Grill%2C%0A%0AI%27d%20love%20a%20quote%20for%20catering.%0A%0ANumber%20of%20guests%3A%20%0ALocation%3A%20%0ADate%3A%20%0ATime%20frame%3A%20%0A%0AThanks!";

const TRANSLATIONS = {
  en: {
    topbar: { msg: "Mon–Fri 11am–5/6pm @ 19th & Irving · Fri nights @ Space 550" },
    nav: {
      catering: "Catering", menu: "Menu", about: "About Us", findUs: "Find Our Truck",
      reviews: "Reviews", contact: "Contact", emailCta: "Email to Book"
    },
    hero: {
      eyebrow: "Bay Area Catering",
      titleHtml: "Bring the truck.<br>Feed the crowd.",
      sub: "Mexi-Cali Grill is a family-run, 4.8★-rated food truck serving fresh, made-to-order Mexican & California street food across the Bay Area. Book us for your office lunch, wedding, block party, or private event.",
      ctaPrimary: "✉️ Email to Book Catering",
      ctaSecondary: "How Catering Works",
      noteHtml: `Follow <a href="https://www.instagram.com/24mexi.cali/" target="_blank" rel="noopener">@24Mexi.Cali on Instagram</a> for daily updates, or call/text <a href="tel:+14156600469">(415) 660-0469</a>`
    },
    stats: {
      ratingLabel: "Google rating", madeLabel: "Made to order",
      area: "Bay Area", areaLabel: "We travel to you",
      foodsLabel: "Tacos · Burritos · Quesadillas"
    },
    catering: {
      eyebrow: "Catering",
      title: "Real street-truck flavor, delivered to your event",
      lead: "Everything's cooked fresh: carne asada, al pastor, carnitas, chorizo, and shrimp, piled into the burritos, tacos, quesadillas, and nachos our regulars keep coming back for. Tell us your group size and we'll put together a menu that fits.",
      card1Title: "Office and Corporate",
      card1Desc: "Team lunches, launch parties, all-hands meetings. We'll park and serve, or box everything up to go.",
      card2Title: "Weddings and Parties",
      card2Desc: "Birthdays, backyard parties, block parties, and weddings that want something more fun than a buffet line.",
      card3Title: "Private and Community Events",
      card3Desc: "School events, fundraisers, neighborhood gatherings. Ask about group pricing.",
      areaNoteHtml: `<strong>Where we cater:</strong> our regular truck runs on a San Francisco permit at the spots below, but private catering isn't limited to SF. We serve the greater Bay Area, and the truck doesn't even have to show up. We do drop-off catering too, just mention it when you reach out.`,
      howTitle: "Booking is simple",
      step1Title: "Email us the details",
      step1DescHtml: `Send us your <strong>number of guests, location, date, and time frame</strong> at <a href="${MAILTO}">24mexi.cali@gmail.com</a>.`,
      step2Title: "Get your quote",
      step2Desc: "Pricing depends on your group size and menu. We'll send options once we hear from you.",
      step3Title: "We show up and cook",
      step3Desc: "Fresh, made to order, right where you need us.",
      ctaButton: "✉️ Email for Pricing & Availability"
    },
    menu: {
      eyebrow: "Our Menu",
      title: "What's on the truck",
      lead: "This is our regular walk-up menu, a starting point for building your catering order. Reach out for family-style trays and per-person pricing.",
      photoCaption: "Straight off our truck window",
      item1Name: "Classic Burrito", item1Desc: "Choice of meat, rice, beans, cilantro, onions, cheese, sour cream, guacamole, lettuce & salsa.",
      item2Name: "Mexi-Cali Burrito", item2Desc: "Double portion of meat, beans, corn, cheese, tomatoes, guacamole & salsa.",
      item3Name: "Shrimp Burrito", item3Desc: "Rice, beans, shrimp, cheese, guacamole, sour cream, lettuce, onions, cilantro & salsa.",
      item11Name: "Shrimp Torta", item11Desc: "Mexican bread, shrimp, cheese, beans, guacamole, lettuce, tomato, jalapeño, chips & salsa.",
      item12Name: "Shrimp Super Quesadilla", item12Desc: "Flour tortilla, shrimp, cheese, sour cream, guacamole, lettuce, chips & salsa.",
      item4Name: "Breakfast Burrito", item4Desc: "Chorizo with scrambled eggs, cheese & salsa.",
      item5Name: "Street Taco", item5Desc: "Corn tortilla, choice of meat, cheese, cilantro, radish, grilled onion & salsa.",
      item6Name: "Shrimp Taco", item6Desc: "Corn tortilla, shrimp, onion, cilantro, radish, grilled onion & salsa.",
      item7Name: "Quesadilla Suiza", item7Desc: "Flour tortilla, choice of meat, cheese & salsa.",
      item8Name: "Super Quesadilla", item8Desc: "Flour tortilla, choice of meat, cheese, sour cream, guacamole, lettuce, chips & salsa.",
      item9Name: "Torta", item9Desc: "Mexican bread, choice of meat, cheese, beans, guacamole, lettuce, tomato, jalapeño, chips & salsa.",
      item10Name: "Super Nachos", item10Desc: "Corn chips, choice of meat, cheese, guacamole, jalapeño & salsa.",
      each: "ea",
      meatTitle: "Choice of Meat",
      meatList: "Steak (carne asada) · Chicken (pollo asado) · Al pastor (marinated pork) · Carnitas (shredded pork) · Chorizo (ground pork) · Shrimp (camarón)",
      drinksTitle: "Drinks",
      drinksList: "Canned sodas · Bottled water · Jarritos · Mexican Coke · Topo Chico · Aguas frescas",
      fineprint: "Menu and pricing shown are from our regular truck window and may change. Catering pricing depends on your event, so email us the details and we'll send a quote."
    },
    findUs: {
      eyebrow: "Find Our Truck",
      title: "We move around. Here's how to catch us",
      lead: `Mexi-Cali Grill is an independent truck, so spots and hours can shift. None of that matters for catering, since <strong>we come to you.</strong> If you're hoping to grab lunch or a late-night bite instead, here are our two regular spots:`,
      card1Title: "Weekday Lunch Spot",
      card1When: "Monday – Friday · 11 AM – 5 or 6 PM",
      card1AddressHtml: `19th Ave & Irving St, San Francisco<br><span class="muted">(Inner Sunset)</span>`,
      card1Note: "Hours flex with demand most days, so call or check Instagram to confirm.",
      mapsBtn: "View on Google Maps",
      card2Title: "Friday Late Night",
      card2When: "Fridays · 9 PM – 2 AM",
      card2AddressHtml: `Outside Space 550<br>550 Barneveld Ave, San Francisco<br><span class="muted">Latin dance club: salsa, 3 rooms, full bar</span>`,
      space550Btn: "Space 550 on Instagram",
      ctaButton: "Call or Text to Confirm Today's Spot",
      noteHtml: `📸 Follow <a href="https://www.instagram.com/24mexi.cali/" target="_blank" rel="noopener">@24Mexi.Cali</a> on Instagram for daily locations and specials.`
    },
    reviews: { eyebrow: "What People Say", title: "4.8★ on Google", googleCite: "— Google review" },
    contactCta: {
      title: "Ready to book Mexi-Cali Grill for your event?",
      lead: "Email us your headcount, location, date, and time frame, and we'll take it from there.",
      ctaButton: "✉️ Email Now to Book Catering"
    },
    footer: { copyright: "Mexi-Cali Grill Food Truck · San Francisco & the Bay Area" },
    stickyCta: "✉️ Email to Book Catering",
    about: {
      eyebrow: "About Us",
      title: "Meet Andrea and Alejandro",
      introLead: "The husband-and-wife team behind the truck.",
      p1: "Andrea and Alejandro are married, and Mexi-Cali Grill is a family operation they run together. They've lived in San Francisco's Sunset neighborhood for 17 years, raising their three kids there.",
      ctaTitle: "Bring Andrea and Alejandro's cooking to your event",
      ctaLead: "Email us your headcount, location, date, and time frame, and we'll take it from there."
    }
  },

  es: {
    topbar: { msg: "Lun–Vie 11am–5/6pm en 19th y Irving · Viernes en la noche en Space 550" },
    nav: {
      catering: "Catering", menu: "Menú", about: "Nosotros", findUs: "Encuentra el Camión",
      reviews: "Reseñas", contact: "Contacto", emailCta: "Escríbenos"
    },
    hero: {
      eyebrow: "Catering en el Área de la Bahía",
      titleHtml: "Trae el camión.<br>Alimenta a todos.",
      sub: "Mexi-Cali Grill es un camión de comida familiar con 4.8★ en Google, sirviendo comida fresca y preparada al momento, de estilo Mexicano-Californiano, por toda el Área de la Bahía. Resérvanos para tu comida de oficina, boda, fiesta de cuadra o evento privado.",
      ctaPrimary: "✉️ Escríbenos para Reservar",
      ctaSecondary: "Cómo Funciona el Catering",
      noteHtml: `Síguenos en <a href="https://www.instagram.com/24mexi.cali/" target="_blank" rel="noopener">@24Mexi.Cali en Instagram</a> para novedades diarias, o llama o manda mensaje al <a href="tel:+14156600469">(415) 660-0469</a>`
    },
    stats: {
      ratingLabel: "Calificación en Google", madeLabel: "Preparado al momento",
      area: "Área de la Bahía", areaLabel: "Vamos a donde estés",
      foodsLabel: "Tacos · Burritos · Quesadillas"
    },
    catering: {
      eyebrow: "Catering",
      title: "El sabor auténtico del camión, directo a tu evento",
      lead: "Todo se cocina fresco: carne asada, al pastor, carnitas, chorizo y camarón, servidos en burritos, tacos, quesadillas y nachos que nuestros clientes siguen pidiendo. Dinos cuántos son y armamos un menú que se ajuste a tu evento.",
      card1Title: "Oficinas y Empresas",
      card1Desc: "Comidas de equipo, lanzamientos, juntas generales. Nos estacionamos y servimos, o lo empacamos para llevar.",
      card2Title: "Bodas y Fiestas",
      card2Desc: "Cumpleaños, fiestas en el patio, fiestas de cuadra y bodas que buscan algo más divertido que una línea de buffet.",
      card3Title: "Eventos Privados y Comunitarios",
      card3Desc: "Eventos escolares, recaudaciones de fondos, reuniones de vecinos. Pregúntanos por precios de grupo.",
      areaNoteHtml: `<strong>Dónde damos servicio:</strong> nuestro camión regular opera con un permiso de San Francisco en los puntos de abajo, pero el catering privado no se limita a SF. Damos servicio a toda el Área de la Bahía, y el camión ni siquiera tiene que estar presente. También hacemos catering para entrega, solo dínoslo cuando nos contactes.`,
      howTitle: "Reservar es fácil",
      step1Title: "Escríbenos los detalles",
      step1DescHtml: `Envíanos el <strong>número de invitados, ubicación, fecha y horario</strong> a <a href="${MAILTO}">24mexi.cali@gmail.com</a>.`,
      step2Title: "Recibe tu cotización",
      step2Desc: "El precio depende del tamaño de tu grupo y el menú. Te enviamos opciones en cuanto nos escribas.",
      step3Title: "Llegamos y cocinamos",
      step3Desc: "Fresco, preparado al momento, justo donde nos necesites.",
      ctaButton: "✉️ Escríbenos por Precios y Disponibilidad"
    },
    menu: {
      eyebrow: "Nuestro Menú",
      title: "Lo que hay en el camión",
      lead: "Este es nuestro menú regular de ventanilla, un punto de partida para armar tu pedido de catering. Contáctanos por bandejas familiares y precios por persona.",
      photoCaption: "Directo de la ventanilla de nuestro camión",
      item1Name: "Burrito Clásico", item1Desc: "Elige tu carne, arroz, frijoles, cilantro, cebolla, queso, crema, guacamole, lechuga y salsa.",
      item2Name: "Burrito Mexi-Cali", item2Desc: "Doble porción de carne, frijoles, elote, queso, tomate, guacamole y salsa.",
      item3Name: "Burrito de Camarón", item3Desc: "Arroz, frijoles, camarón, queso, guacamole, crema, lechuga, cebolla, cilantro y salsa.",
      item11Name: "Torta de Camarón", item11Desc: "Pan mexicano, camarón, queso, frijoles, guacamole, lechuga, tomate, jalapeño, totopos y salsa.",
      item12Name: "Super Quesadilla de Camarón", item12Desc: "Tortilla de harina, camarón, queso, crema, guacamole, lechuga, totopos y salsa.",
      item4Name: "Burrito de Desayuno", item4Desc: "Chorizo con huevo revuelto, queso y salsa.",
      item5Name: "Taco de Calle", item5Desc: "Tortilla de maíz, elige tu carne, queso, cilantro, rábano, cebolla asada y salsa.",
      item6Name: "Taco de Camarón", item6Desc: "Tortilla de maíz, camarón, cebolla, cilantro, rábano, cebolla asada y salsa.",
      item7Name: "Quesadilla Suiza", item7Desc: "Tortilla de harina, elige tu carne, queso y salsa.",
      item8Name: "Super Quesadilla", item8Desc: "Tortilla de harina, elige tu carne, queso, crema, guacamole, lechuga, totopos y salsa.",
      item9Name: "Torta", item9Desc: "Pan mexicano, elige tu carne, queso, frijoles, guacamole, lechuga, tomate, jalapeño, totopos y salsa.",
      item10Name: "Super Nachos", item10Desc: "Totopos, elige tu carne, queso, guacamole, jalapeño y salsa.",
      each: "c/u",
      meatTitle: "Elige tu Carne",
      meatList: "Carne asada (steak) · Pollo asado (chicken) · Al pastor (marinado) · Carnitas (deshebrada) · Chorizo · Camarón",
      drinksTitle: "Bebidas",
      drinksList: "Refrescos enlatados · Agua embotellada · Jarritos · Coca-Cola Mexicana · Topo Chico · Aguas frescas",
      fineprint: "El menú y los precios son los de nuestra ventanilla regular y pueden cambiar. El precio de catering depende de tu evento, así que escríbenos los detalles y te enviamos una cotización."
    },
    findUs: {
      eyebrow: "Encuentra Nuestro Camión",
      title: "Nos movemos. Así nos puedes encontrar",
      lead: `Mexi-Cali Grill es un camión independiente, así que los lugares y horarios pueden cambiar. Eso no importa para catering, porque <strong>nosotros vamos a ti.</strong> Si buscas venir a comer o un antojo nocturno, aquí están nuestros dos puntos regulares:`,
      card1Title: "Punto de Comida entre Semana",
      card1When: "Lunes – Viernes · 11 AM – 5 o 6 PM",
      card1AddressHtml: `19th Ave y Irving St, San Francisco<br><span class="muted">(Inner Sunset)</span>`,
      card1Note: "El horario varía según la demanda la mayoría de los días, así que llama o revisa Instagram para confirmar.",
      mapsBtn: "Ver en Google Maps",
      card2Title: "Viernes en la Noche",
      card2When: "Viernes · 9 PM – 2 AM",
      card2AddressHtml: `Afuera de Space 550<br>550 Barneveld Ave, San Francisco<br><span class="muted">Club de baile latino: salsa, 3 salones, bar completo</span>`,
      space550Btn: "Space 550 en Instagram",
      ctaButton: "Llama o Manda Mensaje para Confirmar",
      noteHtml: `📸 Síguenos en <a href="https://www.instagram.com/24mexi.cali/" target="_blank" rel="noopener">@24Mexi.Cali</a> en Instagram para ver ubicaciones diarias y especiales.`
    },
    reviews: { eyebrow: "Lo Que Dice la Gente", title: "4.8★ en Google", googleCite: "— Reseña de Google" },
    contactCta: {
      title: "¿Listo para reservar Mexi-Cali Grill para tu evento?",
      lead: "Escríbenos el número de invitados, ubicación, fecha y horario, y nosotros nos encargamos del resto.",
      ctaButton: "✉️ Escríbenos para Reservar"
    },
    footer: { copyright: "Mexi-Cali Grill Food Truck · San Francisco y el Área de la Bahía" },
    stickyCta: "✉️ Escríbenos para Reservar",
    about: {
      eyebrow: "Nosotros",
      title: "Conoce a Andrea y Alejandro",
      introLead: "La pareja detrás del camión.",
      p1: "Andrea y Alejandro están casados, y Mexi-Cali Grill es un negocio familiar que llevan juntos. Han vivido en el vecindario Sunset de San Francisco por 17 años, criando ahí a sus tres hijos.",
      ctaTitle: "Lleva la cocina de Andrea y Alejandro a tu evento",
      ctaLead: "Escríbenos el número de invitados, ubicación, fecha y horario, y nosotros nos encargamos del resto."
    }
  }
};
