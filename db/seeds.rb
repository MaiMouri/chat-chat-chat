# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

puts 'Destroying all datas...'

Message.destroy_all
User.destroy_all
Channel.destroy_all

puts 'Database cleared!'

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

names = %w(general paris react)
nicknames = %w(Nick Mai Patrick Jane)

general = Channel.create(name: 'general')
paris = Channel.create(name: 'paris')
react = Channel.create(name: 'react')

channels = [general, paris, react]

users = nicknames.map do |nickname|
  User.create(email: "#{nickname.downcase}@gmail.com", password: '123123', nickname: nickname)
end

20.times do
  Message.create! user: users.sample, channel: channels.sample, content: Faker::TvShows::HowIMetYourMother.quote
end

puts 'Channels:'
channels.each do |channel|
  puts "- #{channel.id}: #{channel.name}"
end
