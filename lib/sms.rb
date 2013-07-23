
class SmsClass 

  ACCOUNT_SID = 'ACdbb7c52e05afa00d4194803c28507651'
  AUTH_TOKEN = '2360a3c0ca40b13856aa936b1c7e983d'
  FROM_NUM = "+18019216501"

  def initialize
    @client = Twilio::REST::Client.new(ACCOUNT_SID, AUTH_TOKEN)
  end

  def send(number, body)

      data = {
        :body => body,
        :to => number,
        :from => FROM_NUM
      }
      
      message = @client.account.sms.messages.create(data)
  end
end
