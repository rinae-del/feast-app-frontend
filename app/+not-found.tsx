import { StyleSheet, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Text>This screen doesn't exist.</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
