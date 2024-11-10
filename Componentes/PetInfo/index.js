import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Context } from '../../contexto/provider';
const PetInfo = () => {
  const route = useRoute();
  const { pet } = route.params;

  console.log(pet);

  const { adm } = useContext(Context)
  const cuidadosArray = pet.cuidados.split(', ');
  const temperamentosArray = pet.temperamentos.split(', ');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pet.imagem_pet }}
        style={styles.imgPet}
      />

      <View style={styles.containerInfoPet}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.nomePet}>
            {pet.nome_pet}
          </Text>
          <View style={styles.containerDescPet}>
            <View style={styles.descPet}>
              <Text style={styles.descIdade}>
                {pet.desc_tipo_pet}
              </Text>
            </View>
            <View style={styles.descPet}>
              <Text style={styles.descIdade}>
                {pet.desc_genero}
              </Text>
            </View>
            <View style={styles.descPet}>
              {pet.desc_idade === 'Jovem - 6 meses até 2 anos' ? (
                <Text style={styles.descIdade}>jovem</Text>
              ) : pet.desc_idade === 'Filhote - 6 meses ou menos' ? (
                <Text style={styles.descIdade}>Filhote</Text>
              ) : pet.desc_idade === 'Adulto - 2 a 7 anos' ? (
                <Text style={styles.descIdade}>adulto</Text>
              ) : (
                <Text style={styles.descIdade}>não especificado</Text>
              )}
            </View>
          </View>
          <View style={styles.tittle}>
            <Text style={styles.tittleTxt}>Cuidados Veterinarios:</Text>
          </View>
          <View style={styles.cuidadosContainer}>
            {cuidadosArray.map((cuidado, index) => (
              <Text key={index} style={[styles.descPet, { textAlign: "center" }]}>{cuidado}</Text>
            ))}
          </View>
          <View style={styles.tittle}>
            <Text style={styles.tittleTxt}>Personalidade:</Text>
          </View>
          <View style={styles.cuidadosContainer}>
            {temperamentosArray.map((temperamento, index) => (
              <Text key={index} style={[styles.descPet, { textAlign: "center" }]}>{temperamento}</Text>
            ))}
          </View>
          <View style={styles.tittle}>
            <Text style={styles.tittleTxt}>sobre {pet.nome_pet}:</Text>
          </View>
          <View style={styles.cuidadosContainer}>
            <Text style={{ fontSize: 16, textAlign: 'justify' }}>
              Um cachorro dócil é aquele cuja personalidade reflete gentileza, paciência e afeto natural, tornando-o um excelente companheiro tanto para indivíduos quanto para famílias. Dócil por natureza, esse cão é geralmente amigável com todos ao seu redor, incluindo crianças, outros animais e até estranhos. Sua tranquilidade e disposição para receber carinhos, junto com uma natureza obediente, tornam o cachorro dócil um amigo confiável em qualquer ambiente.

              Esse tipo de cachorro se adapta bem a novos ambientes e pessoas, respondendo a comandos com facilidade e tendendo a ser fácil de treinar. Ele demonstra paciência, o que é especialmente importante em lares com crianças pequenas, que muitas vezes desejam brincar e interagir mais ativamente com os pets. Esse cão raramente exibe agressividade e, em vez disso, responde com calma mesmo em situações desconhecidas ou estressantes, reforçando sua natureza amável e acolhedora.
            </Text>
          </View>

          <View style={styles.containerBtn}>
            <Pressable style={styles.btn}>
              <Text style={styles.txtBtn}>
                {adm ? 'Pet adotado?' : 'Quero adotar'}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  imgPet: {
    width: '100%',
    height: 400,
    position: 'relative'
  },
  containerInfoPet: {
    padding: 20,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  nomePet: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  descPet: {
    backgroundColor: "#ccf3dc",
    width: '30%',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: "center"
  },
  descIdade: {
    fontSize: 15,


  },
  containerDescPet: {
    flexDirection: "row",
    gap: 10
  },
  tittle: {
    marginTop: 40
  },
  tittleTxt: {
    fontSize: 22
  },
  cuidadosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    gap: 10,

  },
  containerBtn: {
    alignItems: "center",

  },
  btn: {
    backgroundColor: '#ccf3dc',
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  txtBtn: {
    fontWeight: 'bold',
    fontSize: 17
  }

});

export default PetInfo;
