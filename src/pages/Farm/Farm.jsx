import React, { useState } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const Farm = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar.Pushable as="div">
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Menu fixed="top">
            <Menu.Item>
              <img src="/logo.png" />
            </Menu.Item>

            <Menu.Item name="toggle">
              <button onClick={() => setVisible(!visible)}>asdasdas</button>
            </Menu.Item>
            <Menu.Item name="features">Features</Menu.Item>

            <Menu.Item name="testimonials">Testimonials</Menu.Item>

            <Menu.Item name="sign-in">Sign-in</Menu.Item>
          </Menu>
          <Segment basic style={{ height: "100vh" }}>
            <Header as="h3">Application Content</Header>
            <Image src="/images/wireframe/paragraph.png" />
            <p>
              faran Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis vitae cum non. Eum eligendi exercitationem doloribus
              quaerat harum minus vel perspiciatis ad adipisci dignissimos
              assumenda necessitatibus accusantium accusamus veniam quidem,
              vitae nesciunt inventore recusandae consectetur ut quae tenetur
              voluptate modi perferendis. Hic asperiores, eum tempora pariatur
              earum repellendus, ea non ratione delectus aspernatur voluptate
              alias autem deserunt accusantium quibusdam ipsam modi ipsa sunt
              magni nostrum quisquam, quod perspiciatis enim harum? Rerum non
              beatae laborum ipsum dignissimos vitae totam exercitationem quod
              voluptate. Ipsum quos dicta voluptatum debitis eius aut minima
              assumenda et. Dolorem ipsam corporis quos laboriosam harum tenetur
              id atque, expedita numquam autem incidunt maiores saepe! Doloribus
              natus laudantium fuga aperiam accusantium omnis quia praesentium
              voluptate amet! Laborum, sapiente nemo! Ea quam voluptatum
              quisquam nobis tempore nam, delectus non id iste vero beatae
              aliquam assumenda officia laudantium architecto accusantium
              expedita dolorem itaque pariatur ipsam! Eveniet, vel. In dolore
              distinctio reprehenderit, sequi, fuga rem, maxime laudantium error
              vero similique consequuntur doloremque recusandae earum a tempore!
              Cumque voluptas saepe nihil iusto aliquid labore numquam! Aperiam
              saepe necessitatibus quibusdam, eos harum accusantium fugit hic
              esse laborum, tenetur excepturi molestiae? Repudiandae illo a non,
              odio aliquam reiciendis magni ipsam facere impedit rem recusandae
              laborum suscipit exercitationem distinctio sapiente! Quia quos
              libero consequuntur ex illum molestiae ipsam ab aliquam? Hic
              aspernatur minus, corporis eos aliquid accusantium modi facilis
              molestiae, sunt nesciunt et cum explicabo dolorem repellat quas!
              In maxime autem officia quas ex architecto nulla aut modi sint
              recusandae quaerat, blanditiis, repellendus repellat? Repellendus
              accusantium aut quod, deleniti blanditiis natus nesciunt cum
              provident, molestiae adipisci tempora tenetur. Exercitationem sunt
              modi similique nulla blanditiis at quasi, neque incidunt, ipsa vel
              mollitia a amet beatae ipsam. Saepe nisi assumenda ea. Culpa
              ducimus in vero dolorem deserunt tempora et inventore at dicta
              consequuntur numquam minus, earum sit sunt! says Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Non impedit asperiores
              temporibus libero repudiandae, necessitatibus, qui accusamus
              aliquid neque provident fuga eaque. Sapiente nobis omnis
              architecto, qui rem beatae ut possimus optio, harum asperiores
              nisi cumque sunt dolor exercitationem odio! Ullam culpa
              praesentium blanditiis ratione maiores esse quisquam, harum
              tempore distinctio. Exercitationem commodi totam vel nostrum.
              Nulla cupiditate asperiores aperiam nam quia neque explicabo modi
              corporis obcaecati nesciunt cum sequi at sunt, odit incidunt?
              Eveniet, voluptas autem molestiae facere, consequuntur fuga est
              voluptate distinctio, odio praesentium ipsa. Quas, labore
              aspernatur vitae voluptatum cum laudantium atque! Minus, sunt
              itaque deserunt voluptatibus aut perspiciatis neque laboriosam
              porro obcaecati voluptates, perferendis aperiam, consequatur sit.
              Est necessitatibus quasi sunt placeat expedita saepe voluptatem,
              excepturi nobis, modi at, cupiditate hic repudiandae maxime quia.
              Excepturi libero fuga praesentium corporis autem nam nobis
              pariatur reprehenderit a, magni, quam officiis natus sequi
              laboriosam error dolorum totam adipisci vel necessitatibus eos
              maiores eveniet. Vero modi nihil non in, ducimus delectus minus,
              enim facilis a atque molestiae voluptatibus accusamus aspernatur
              dolorum eum mollitia, adipisci et aperiam esse quisquam rem
              repudiandae voluptatum. Labore non quia officiis minus rerum ex
              optio veniam ratione velit illum quae, minima adipisci suscipit
              possimus pariatur beatae id blanditiis dicta repellendus.
              Asperiores reprehenderit iure quas laborum eius! Quasi reiciendis
              minus iure nisi, laboriosam odio, blanditiis maxime, ducimus aut
              sit amet id. Fugiat minus tempora architecto aspernatur iure
              libero eaque voluptatem iusto, ipsa tempore facilis ex adipisci ut
              placeat necessitatibus esse aliquid odit nam, eum, amet
              perspiciatis. Aliquam recusandae illum tenetur eos quo unde,
              ratione voluptas facilis repudiandae doloremque laboriosam.
              Explicabo accusantium ducimus quas cupiditate corporis ullam quis
              vitae, vel doloremque deserunt nobis harum omnis quasi labore
              quisquam autem, id esse! Exercitationem hic officia eum quod atque
              doloribus delectus mollitia laboriosam et ipsam quas ratione
              adipisci, similique reiciendis, corporis vel. Blanditiis sunt sint
              animi repudiandae quasi distinctio, nisi possimus dolorum,
              debitis, aut iure autem quas inventore? Aperiam molestiae
              exercitationem quis ab repudiandae magni, labore eaque aut sint id
              minus, nihil, nam doloremque. Assumenda, iusto. Nulla quos fugiat
              delectus, eligendi ipsam ad amet doloremque, ab provident velit
              earum sit aliquid alias eius adipisci deleniti! Cupiditate
              necessitatibus, inventore, eaque neque ad rerum facilis impedit
              dolores, aliquam nostrum odit illo eos illum? Consequatur, iure!
              Modi maxime fuga cumque similique illo voluptatum qui, nesciunt
              animi dicta nostrum labore dolore vel ab a inventore consequatur
              amet officia error? Placeat, recusandae. Non ex porro culpa
              aperiam, esse, sunt quidem quam fugit quasi obcaecati
              necessitatibus officia eius sit voluptatum, ipsa perspiciatis
              voluptate vitae perferendis laboriosam hic dolorem provident
              minima. Voluptatibus mollitia a maxime ipsa fugit quis voluptatum
              commodi nulla necessitatibus blanditiis nesciunt saepe quidem,
              enim ipsum corrupti vitae aspernatur? Quibusdam, atque ex? Ab quod
              ea vero adipisci, atque voluptatibus. Dicta quaerat voluptate
              natus modi maiores quisquam, quod animi perspiciatis alias,
              repudiandae quam labore itaque ipsum, nostrum dignissimos
              aspernatur suscipit numquam officia quos consequuntur vitae
              deserunt quia iste! Explicabo aliquam neque mollitia commodi sed
              repudiandae suscipit placeat, voluptates repellat modi laboriosam
              qui sint tenetur ipsa sequi, consectetur nihil ipsam dolorum quos
              aspernatur autem. Nulla possimus corrupti repellendus omnis quas
              vel explicabo qui? Officiis ex, nam aut sequi quis voluptatum vero
              excepturi labore at. Rerum dolores consectetur, necessitatibus
              aliquid at libero dicta voluptatum similique itaque quaerat,
              ducimus porro! Expedita, sapiente molestias reprehenderit soluta
              quidem placeat? Magnam, provident vel? Corporis libero excepturi
              dignissimos itaque ea eum laboriosam, maiores iure minima neque
              odio nulla voluptatem? Ea, neque ab? Modi delectus similique
              dolorem voluptas ipsam minus optio, assumenda quibusdam quidem
              nemo laudantium dicta nostrum culpa, fugiat, recusandae minima
              consectetur explicabo sapiente. Rerum dolorum assumenda
              consectetur, et exercitationem tempore corrupti temporibus nam
              quos quam quia saepe incidunt, fugit perferendis harum. Velit
              impedit eum, suscipit recusandae voluptates cumque. At eligendi ut
              laudantium, harum et minima quo maxime dolor vitae, sapiente
              laborum porro vel, saepe tempora provident iure. Ad eum rerum
              porro, quaerat quod nam accusamus sapiente dicta eligendi ea illum
              fuga iusto debitis animi a beatae natus ut, labore enim! Ea iure
              vitae unde nihil iste quidem ad minus, facilis odit? Odio, facilis
              possimus officiis eos pariatur reiciendis provident ducimus? Nam,
              illum dolore blanditiis voluptatibus dolores officia, soluta id
              corrupti similique illo maxime tempore quibusdam porro
              repellendus. Placeat quia quasi itaque pariatur reiciendis
              mollitia eveniet, quaerat velit aperiam dolores recusandae, eum
              dolorem quidem et quos cupiditate voluptatibus odit error
              repudiandae, consectetur totam ex? Repudiandae amet nam quidem
              ducimus, quo, nisi ut perferendis vitae assumenda tempore rem
              aspernatur beatae odio autem temporibus enim quia sint? Quaerat
              consectetur eveniet quia aperiam cupiditate placeat architecto
              officia harum at, sequi atque quibusdam eius, hic illo voluptatem.
              Itaque quae vel iste quam autem expedita, odit incidunt quis
              suscipit vero blanditiis qui quasi quo sapiente aspernatur officia
              sint molestias eos est eius. Ullam error suscipit cum veniam et
              nesciunt quis optio provident hic ducimus quidem magni assumenda,
              atque non officiis ipsa, eum fugit cumque autem necessitatibus
              explicabo! Earum nemo iure suscipit doloribus reiciendis officia
              corporis expedita dicta necessitatibus perferendis! Modi
              voluptates repellendus tempore ea harum aperiam nisi quod
              laudantium sequi vero culpa fugit soluta animi qui molestias
              ratione tempora saepe architecto quaerat dolores, aspernatur
              nostrum? Consequatur accusamus porro in nisi. Animi odit quod quis
              totam maiores voluptatem vitae dolore qui temporibus eaque,
              commodi nam consequuntur eos quisquam, quas ex modi iste saepe
              quidem debitis alias aliquam nostrum in! Mollitia esse ratione
              sunt architecto magnam itaque quos atque eum impedit. Saepe
              numquam ut inventore facere ad similique, quis eaque fuga
              perspiciatis vel ullam consectetur tenetur veritatis illum
              explicabo, quasi accusamus odio rem alias expedita nemo debitis et
              modi? Nobis, voluptatum. Nemo ex nisi eaque amet quam quas aliquid
              esse ducimus iste, minima deserunt quae quos expedita. Nisi
              inventore eos officia placeat possimus cumque fuga similique.
              Saepe maiores, odio, earum impedit temporibus necessitatibus ea
              culpa repellat architecto assumenda repudiandae cumque laudantium!
              Dolorum assumenda tenetur odit laudantium veniam, temporibus animi
              modi facilis, reprehenderit, natus obcaecati ad possimus non
              totam. Quaerat minima vero fugit voluptatibus quae inventore
              possimus esse deserunt nemo eum? Nesciunt blanditiis, similique
              debitis animi atque dolorum aperiam, fuga dolore quo reprehenderit
              nemo illum id. Iure omnis delectus debitis cum, molestias possimus
              voluptatibus consectetur fuga magnam! Reprehenderit error
              voluptates facilis maxime rem, dicta praesentium. Facilis at
              debitis minima impedit omnis commodi illo est quod provident porro
              obcaecati eaque, error esse laudantium rem fugit necessitatibus
              magnam quas fugiat earum vitae iure enim assumenda! Tempora unde
              ullam corrupti vel perspiciatis quos voluptates magnam sequi
              itaque omnis consectetur quas deleniti assumenda facilis
              necessitatibus corporis ipsum, natus veniam debitis earum iure
              odit? Id quaerat pariatur corrupti unde itaque at a. Fuga delectus
              recusandae perspiciatis reiciendis est ex aut. Aspernatur amet,
              ducimus harum, omnis quod nulla culpa doloremque similique sunt
              quibusdam distinctio. Optio, doloribus at laboriosam enim dolores
              recusandae cumque dolorum temporibus ex voluptates quae ab cum
              beatae delectus fugiat distinctio repellendus harum placeat nemo
              ducimus odio nulla! Inventore quae quam neque consequatur quas
              nulla vitae ullam similique nesciunt, amet earum molestiae
              perspiciatis alias pariatur sapiente iusto vel corrupti eaque
              delectus magni accusantium esse aperiam. Quam reprehenderit
              doloribus in tenetur, quidem quas ullam atque ex! Magni dolorum
              quos nulla nemo! Libero cum consequatur quod vitae facilis
              corporis fugit odit enim! Quisquam incidunt commodi saepe minus
              necessitatibus, repellendus sequi quaerat explicabo magni eum illo
              excepturi dignissimos sunt inventore. Illum, repudiandae commodi,
              voluptate aliquid a et cumque error facilis ipsa quaerat nostrum!
              Tempore at inventore labore enim animi, delectus eveniet provident
              architecto quos velit quisquam repellat quis, tempora, rerum
              aliquam perspiciatis maxime ut veniam similique? Quo illo nulla
              vitae quia provident culpa inventore. Cum sunt tenetur atque
              nesciunt minus voluptatibus rem quisquam ipsum consequuntur autem
              exercitationem, enim, mollitia corrupti cumque, necessitatibus
              temporibus expedita fugit qui hic deserunt veniam facere quas
              saepe harum. Praesentium eveniet nemo tenetur quod molestias
              aspernatur nam minima aliquam odit alias, suscipit reprehenderit
              mollitia quisquam tempora magni officia ducimus itaque voluptas
              impedit. Accusamus veniam adipisci cumque saepe nisi libero iste
              maiores amet, laborum non praesentium maxime doloremque
              perspiciatis odit molestias necessitatibus unde molestiae sit
              provident fuga repudiandae omnis possimus enim? Pariatur eos,
              suscipit quo consectetur doloremque, iste rerum, laboriosam quasi
              in nesciunt deserunt vero accusamus minima! Iure tempore totam
              suscipit voluptatum ipsum molestias facilis delectus minus odio
              quasi? Est aliquam atque repudiandae magnam, perspiciatis unde
              soluta. Eaque dolor sapiente quasi placeat, sed magni blanditiis
              quia aliquid esse aliquam voluptas est laboriosam, deserunt ea
              velit. Expedita voluptates error quibusdam officia neque labore
              veniam ipsum ipsa ducimus. Pariatur alias eum repellendus quod
              similique odio, doloremque, illum, odit laboriosam fugit itaque
              inventore! Facere cum officiis beatae repudiandae! Doloribus
              distinctio officiis modi asperiores impedit quas neque illum
              voluptates iste minus fugiat expedita nostrum velit, commodi quam
              rerum odit, nemo sint doloremque! Debitis ut tempora aperiam
              quaerat, asperiores quo omnis amet voluptate velit optio earum vel
              animi non exercitationem veniam, eligendi obcaecati suscipit est
              nisi. Earum dicta facere praesentium maiores veniam rerum
              perspiciatis, rem at enim accusantium in excepturi ipsa, sunt quia
              nam aspernatur est id, explicabo ut quis debitis perferendis
              tenetur? Corporis laborum animi quis voluptatum esse mollitia, aut
              hic modi distinctio rerum beatae cupiditate provident dolores nemo
              eos quia, atque expedita dolore libero id natus illo sint ipsum.
              Similique corrupti nesciunt aspernatur cum deserunt dolorum
              molestiae beatae laudantium neque ratione a rerum numquam quod in
              magni est, quibusdam non nostrum placeat aut ducimus. Deserunt
              itaque dicta quibusdam neque autem recusandae delectus! Ex
              deleniti officiis id temporibus officia nesciunt qui amet quae
              saepe quidem, inventore quos sit voluptatum, ullam, similique
              aliquid cupiditate? Laboriosam natus optio deserunt cum doloremque
              velit dicta beatae explicabo sint sit architecto, fuga nisi
              quaerat voluptatibus asperiores cumque quasi repudiandae,
              corrupti, rem maxime repellat enim aliquid perspiciatis? Cumque
              dolores quis hic accusamus voluptates beatae exercitationem.
              Ratione itaque tenetur, expedita recusandae repellendus, unde
              dolore porro nihil error eum assumenda fuga illo at exercitationem
              iste amet rem quos iusto! Quibusdam aspernatur animi esse delectus
              perspiciatis rerum qui ab culpa iste odio. Eum adipisci,
              blanditiis odio iste a tempore incidunt placeat consectetur
              sapiente aperiam aspernatur exercitationem, porro corporis
              quibusdam atque nisi officiis quis culpa quos! Consequuntur et vel
              saepe culpa temporibus est distinctio? Recusandae vitae, impedit
              similique ipsa beatae debitis velit atque itaque rem nobis ut a
              sed sunt, illo accusamus omnis dolore autem ducimus dicta
              suscipit? Consequuntur ducimus labore nobis non dicta unde
              voluptatibus temporibus ullam ipsam delectus? Voluptate impedit
              facere doloremque, quis sapiente illo nostrum velit nesciunt
              reiciendis! Quam autem excepturi minima quasi laborum dolore
              tempore laudantium architecto fugit sapiente quia velit rerum vel,
              necessitatibus minus dignissimos, iure earum corporis. Asperiores
              veniam fuga, quis autem accusamus nisi accusantium eum numquam
              expedita iusto minus provident eos ipsa, adipisci consectetur
              libero repudiandae at aperiam, dolor ducimus et quidem. Ea,
              repellat veritatis dolores, corporis laudantium adipisci officia
              eaque accusantium non architecto ad reiciendis ex id ullam labore
              exercitationem recusandae impedit atque nobis sed voluptate
              pariatur assumenda! Praesentium expedita illo repudiandae? Hic
              quia consequatur nisi numquam eligendi mollitia omnis dolores
              possimus, id, ab officiis, vitae blanditiis commodi. Fugiat facere
              quaerat ipsum itaque enim nihil possimus, obcaecati tenetur quia
              eligendi aperiam assumenda deserunt, ex atque nostrum amet quam
              earum corporis ut, culpa error iure nobis. Quaerat laborum,
              tenetur ipsum id tempore optio suscipit esse praesentium! Itaque,
              qui dignissimos aperiam id quidem maiores fugit tempora eum quasi
              quibusdam iusto inventore officia omnis nesciunt praesentium non
              repellat voluptatum perferendis eaque ipsam dolores modi vitae?
              Exercitationem necessitatibus ea veritatis illo enim laborum
              voluptatum commodi mollitia fugiat, magnam alias, maiores,
              provident omnis? Ipsa est tenetur quas odio perspiciatis veritatis
              minus. Saepe officiis quos, assumenda alias sit dolorem, aut
              consequuntur dolores animi delectus beatae laudantium sint fugiat?
              Illo nam nemo facere maiores ullam cupiditate at praesentium
              veniam, odit vel, quos quam, ut quaerat sequi? Fuga corrupti quos
              omnis repellat eum tempora laborum iste nisi quam? Eos ullam earum
              voluptatum nihil impedit id, voluptatem quis enim vitae. Sint quod
              adipisci ut consequuntur itaque suscipit molestiae, dolores
              expedita nihil placeat perferendis, nesciunt dignissimos quidem
              quo explicabo magni sed? Explicabo omnis quis excepturi voluptatum
              quasi eaque eligendi laborum sunt temporibus? Repellat in sit
              cumque explicabo, placeat dolore, molestiae, velit eveniet
              obcaecati saepe eius harum fugit beatae corrupti quas labore!
            </p>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Farm;
