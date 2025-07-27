import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import User from './User.js';

const Subscription = sequelize.define('Subscription', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  plan: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'active' }
}, { tableName: 'subscriptions', timestamps: true });

User.hasMany(Subscription, { foreignKey: 'userId' });
Subscription.belongsTo(User, { foreignKey: 'userId' });

export default Subscription;
