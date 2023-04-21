const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  login,
  sendForm,
  deleteForm,
  getUserData,
  update
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}

async function login(req, res){
 try {
  const user = await User.findOne({email: req.body.email});
  if (!user) throw new Error();
  const match = await bcrypt.compare(req.body.password, user.password);
  if(!match) throw new Error();
  res.json( createJWT(user) );
 } catch {
  res.status(400).json('Bad Credentials');
 }
}

async function sendForm(req, res){
  console.log('we are in controller', req.body)
  try {
    const user = await User.findById(req.user._id);
    console.log(user);
    user.requestForms.push(req.body);
    const updatedUser = await user.save();
    res.status(200).json('success')
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteForm(req, res){
  const id = req.body.formId;
  try {
    const user = await User.findById(req.user._id);
    const newForms = user.requestForms.filter((form) => form._id.toString() !== id);
    user.requestForms = newForms;    
    await user.save();
    res.status(200).json('success')
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getUserData(req, res) {
  try {
  const user = await User.findById(req.user._id);
  res.json(user);
} catch (error) {
  res.status(400).json(error);
}}

async function update(req, res) {
  console.log('we are in update func controlers');
  try {
    const id = req.body.id;
    const user = await User.findById(req.user._id);
    const selectedForm = user.requestForms.find((form) => form._id.toString() === id);
    selectedForm.roomDescription = req.body.roomDescription;
    selectedForm.soundtrack = req.body.soundtrack;
    selectedForm.imagery = req.body.imagery;

    await user.save();
    res.status(200).json('success updating the form!')
} catch (error) {
  res.status(400).json(error);
}
}