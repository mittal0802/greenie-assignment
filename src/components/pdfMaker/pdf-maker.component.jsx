import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Component to render PDF
const UserPDF = ({ user, onClose }) => {
  // Define styles for PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 20,
    },
    section: {
      margin: 10,
      fontSize: 14,
    },
  });

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: "9999",
      }}
      onClick={onClose}
    >
      <div
        style={{
          color: "white",
          height: "50px",
          border: "dotted",
          padding: "50px",
        }}
      >
        Click anywhere to close
      </div>
      <PDFViewer
        style={{
          width: "50%",
          height: "100%",
        }}
      >
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Username: {user.username}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Phone: {user.phone}</Text>
              <Text>Created At: {user.createdAt}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <div
        style={{
          color: "white",
          height: "50px",
          border: "dotted",
          padding: "50px",
        }}
      >
        Click anywhere to close
      </div>
    </div>
  );
};

export default UserPDF;
