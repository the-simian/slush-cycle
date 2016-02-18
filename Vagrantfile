
Vagrant.require_version '>= 1.5.0'

Vagrant.configure(2) do |config|
    config.vm.define "db1" do |db1|
      db1.vm.box         = 'ubuntu/trusty64'
      db1.vm.box_version = '~> 14.04'
      db1.vm.synced_folder '.', '/vagrant', disabled: true

    # Providers
    db1.vm.provider :virtualbox do |v|
      v.customize ['modifyvm', :id, '--memory', '512', '--ioapic', 'on']
    end

    # SSH
    db1.ssh.username = 'vagrant'

    # Port Forwarding
    db1.vm.network :forwarded_port, guest: 8080,  host: 8080
    db1.vm.network :forwarded_port, guest: 28015, host: 28015
    db1.vm.network :forwarded_port, guest: 29015, host: 29015

    #private network between shards
    db1.vm.hostname = "db1"
    db1.vm.network "private_network", ip: "10.10.0.20", virtualbox__intnet: "rethink_db_net"

    # Provisioning
    db1.vm.provision :shell do |sh|
      sh.inline = <<-EOF
        source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
        wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
        sudo apt-get --assume-yes update
        sudo apt-get install --assume-yes rethinkdb;
        sed -e 's/# bind=127.0.0.1/bind=all/g' /etc/rethinkdb/default.conf.sample > /etc/rethinkdb/instances.d/default.conf;
        sed -i 's/# canonical-address=/canonical-address=10.10.0.20/g'  /etc/rethinkdb/instances.d/default.conf;
        service rethinkdb start;
      EOF
    end
  end

  config.vm.define "db2" do |db2|
    db2.vm.box         = 'ubuntu/trusty64'
    db2.vm.box_version = '~> 14.04'
    #db2.vm.synced_folder '.', '/vagrant', disabled: true

    # Providers
    db2.vm.provider :virtualbox do |v|
      v.customize ['modifyvm', :id, '--memory', '512', '--ioapic', 'on']
    end

    # SSH
    db2.ssh.username = 'vagrant'

    #private network between shards
    db2.vm.hostname = "db2"
    db2.vm.network "private_network", ip: "10.10.0.21", virtualbox__intnet: "rethink_db_net"

    # Provisioning
    db2.vm.provision :shell do |sh|
      sh.inline = <<-EOF
        source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
        wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
        sudo apt-get --assume-yes update
        sudo apt-get install --assume-yes rethinkdb;
        sed -e 's/# bind=127.0.0.1/bind=all/g' /etc/rethinkdb/default.conf.sample > /etc/rethinkdb/instances.d/default.conf;
        sed -i 's/# canonical-address=/canonical-address=10.10.0.21/g'  /etc/rethinkdb/instances.d/default.conf
        sed -i 's/# join=example.com:29015/join=10.10.0.20/g'  /etc/rethinkdb/instances.d/default.conf
        service rethinkdb start;
      EOF
    end
  end
end
