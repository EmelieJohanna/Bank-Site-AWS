import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 4003;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Generera engångslösenord
function generateOTP() {
  // Generera en sexsiffrig numerisk OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

// Din kod här. Skriv dina arrayer

const users = [];
const accounts = [];
const sessions = [];

// Din kod här. Skriv dina routes:

app.post("/users", (req, res) => {
  const { username, password } = req.body;
  const userId = users.length + 101;

  console.log(username, password, userId);

  users.push({ id: userId, username, password });
  accounts.push({ id: accounts.length + 1, userId, amount: 0 });
  res.status(201).json({ userId });
});

app.post("/sessions", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = generateOTP();
    sessions.push({
      userId: user.id,
      token,
    });
    res.json({ token });
    console.log(token);
  } else {
    res.status(401).send("Username or password is incorrect");
  }
});

app.post("/me/accounts", (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  const session = sessions.find((s) => s.token === token);
  if (session) {
    const account = accounts.find((a) => a.userId === session.userId);
    if (account) {
      res.json({ amount: account.amount });
    } else {
      res.status(404).send("Account not found");
    }
  } else {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

app.post("/me/accounts/transactions", (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  const { amount } = req.body;
  const session = sessions.find((s) => s.token === token);

  if (session) {
    const account = accounts.find((a) => a.userId === session.userId);
    if (account) {
      if (amount < 0) {
        res.status(400).send("Negative amount not allowed");
      } else {
        account.amount += parseFloat(amount);
        res.json({ amount: account.amount });
        console.log(account);
        console.log(session);
        console.log(account.amount);
        console.log(session.amount);
      }
    } else {
      res.status(401).send("Account not found");
    }
  } else {
    res.status(401).send("Invalid or expired token");
  }
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Bankens backend körs på http://localhost:${PORT}`);
});
